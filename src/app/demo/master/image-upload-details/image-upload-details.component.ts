import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-upload-details',
  templateUrl: './image-upload-details.component.html',
  styleUrls: ['./image-upload-details.component.scss']
})
export class ImageUploadDetailsComponent {

  defaultImageUrl: string = '../../../../assets/images/prev.png'; // Set path to your placeholder image
  imageUrl: string | ArrayBuffer | null = this.defaultImageUrl;

  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;


  previewImage() {
    debugger
    if (this.imageInput && this.imageInput.nativeElement && this.imageInput.nativeElement.files && this.imageInput.nativeElement.files.length > 0) {
      const file = this.imageInput.nativeElement.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
