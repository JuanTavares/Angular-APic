import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    PhotoListComponent
  ]
})
export class PhotoListModule { }
