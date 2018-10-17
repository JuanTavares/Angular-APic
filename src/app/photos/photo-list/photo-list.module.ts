import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ],
  declarations: [
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    PhotoListComponent,
    SearchComponent
  ]
})
export class PhotoListModule { }
