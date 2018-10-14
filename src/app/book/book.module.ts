import { DelayDirective } from './shared/delay.directive';
import { ZoomDirective } from './shared/zoom.directive';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { IsbnPipe } from './shared/isbn.pipe';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ]
})
export class BookModule { }
