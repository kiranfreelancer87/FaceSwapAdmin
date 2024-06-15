import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  updateImageDiv = false;

getImageUrl(imgPath: string): string {
  return ApiService.baseUrl + '/' + imgPath;
}
  allCategories: any[] = [];
  showcard = false;
  searchForm: FormGroup;
  uploadForm: FormGroup;
  updateForm:FormGroup;
  images: any[] = [];
  selectedFile: File | null = null;
  imagePath: string = '';

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      catIdFc: ['']
    });
    this.uploadForm = this.fb.group({
      catIdFc: [''],
      imgFc: ['']
    });
    this.updateForm = this.fb.group({
      imageFc:['']
    })
  }

  navigateToDetails() {
    this.router.navigate(['/', 'master', 'image-upload-details']);
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.apiService.getallcategory().subscribe((res) => {
      this.allCategories = res;
    });
  }

  addImage() {
    this.showcard = true;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  upload() {
    const categoryId = this.uploadForm.get('catIdFc')?.value;
    if (!this.selectedFile) {
      alert('No image selected');
      return;
    }

    this.apiService.uploadImage(categoryId, this.selectedFile).subscribe(
      response => {
        alert('Image uploaded successfully');
        this.loadImages(categoryId); 
      },
      error => {
        alert('Failed to upload image');
      }
    );
  }

  loadImages(categoryId: number) {
    this.apiService.getImagesByCategory(categoryId).subscribe(
      images => {
        this.images = images;
      },
      error => {
        alert('Failed to load images');
      }
    );
  }

  onCategoryChange() {
    const categoryId = this.searchForm.get('catIdFc')?.value;
    if (categoryId) {
      this.loadImages(categoryId);
    }
  }
  

  deleteImage(image: any) {
    let id =image.id;
    alert(id)
    if (confirm('Are you sure you want to delete this image?')) {
      this.apiService.deleteImage(image.id).subscribe(
          response => {
            this.images = this.images.filter(img => img.id !== image.id);
          },
          error => {
            console.error('Error deleting image:', error);
          }
        );
    }
  }
 
  }

  

