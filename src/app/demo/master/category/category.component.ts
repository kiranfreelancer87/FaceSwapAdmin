import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm : FormGroup
  allCategory : any[] = [];
  category : any;
  showbtn = false;

  public filter1: string = ''
  constructor(private apiService: ApiService,private fb:FormBuilder){
    this.categoryForm = this.fb.group({
      categoryNameFc:['',],
      
    })

  }
  ngOnInit(): void {
    this.viewCategory();
    
  }
  addCategory(){
    let categoryName = this.categoryForm.get('categoryNameFc')?.value;
    
    const categoryData = {
      category: categoryName,
      status: 'active'
    };
    this.apiService.addCategory(categoryData).subscribe(
      res => {
        alert('Category added successfully');
        this.ngOnInit();
      },
      error => {
        alert('Error adding category');
      }
    );
    

  }
  viewCategory(){
    this.apiService.getallcategory().subscribe((res)=>{
      this.allCategory = res;
    })
  }
  toggleStatus(cat:any) {
    cat.status = cat.status === 'active' ? 'inactive' : 'active';
    this.updateStatus(cat);
  }
  updateStatus(category:any) {
    const categoryData = {
      category: category.category,
      created_at: new Date().toISOString(),
      status: category.status
    };

    this.apiService.updateCategory(category.id, categoryData).subscribe(
      res => {
        alert('Category updated successfully');
        this.ngOnInit();
      },
      error => {
        alert('Error updating category');
      }
    );
  }
  editCategory(category:any){
    this.showbtn = true;
    this.categoryForm.patchValue({
      categoryNameFc:category.category
    })
    this.category=category;
    
  }
    
  updateCategory(){
    let categoryName = this.categoryForm.get('categoryNameFc')?.value;

    const categoryData = {
      category: categoryName,
      created_at: new Date().toISOString(),
      status: this.category.status
    };
    this.apiService.updateCategory(this.category.id, categoryData).subscribe(
      res => {
        alert('Category updated successfully');
        this.ngOnInit();
        this.showbtn = false;
        this.categoryForm.reset();
      },
      error => {
        alert('Error updating category');
      }
    );
    


  }
  deleteCategory(id:number){
    this.apiService.deleteCategory(id).subscribe(
      res => {
        alert('Category deleted successfully');
        this.ngOnInit();
      },
      error => {
        alert('Error deleting category');
      }
    );
    
  }

}

