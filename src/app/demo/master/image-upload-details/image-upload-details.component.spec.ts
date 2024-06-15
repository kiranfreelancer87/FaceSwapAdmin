import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadDetailsComponent } from './image-upload-details.component';

describe('ImageUploadDetailsComponent', () => {
  let component: ImageUploadDetailsComponent;
  let fixture: ComponentFixture<ImageUploadDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadDetailsComponent]
    });
    fixture = TestBed.createComponent(ImageUploadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
