import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchModule } from '../search/search.module';
import { DemoModule } from '../demo.module';
import { MasterRoutingModule } from './master-routing.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadDetailsComponent } from './image-upload-details/image-upload-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
    ImageUploadComponent,
    ImageUploadDetailsComponent,
  ],
    imports: [
      CommonModule,
      MasterRoutingModule,
      SharedModule,
      NgxPaginationModule,
      SearchModule,
      DemoModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  
  export class MasterModule { }