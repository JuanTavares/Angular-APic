import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoModule,
    PhotoDetailsModule
  ]
})
export class PhotosModule { }
