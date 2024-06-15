import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadDetailsComponent } from './image-upload-details/image-upload-details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'category',
                component: CategoryComponent
            },
            {
                path: 'image-upload',
                component: ImageUploadComponent
            },
            {
                path: 'image-upload-details',
                component: ImageUploadDetailsComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterRoutingModule { }