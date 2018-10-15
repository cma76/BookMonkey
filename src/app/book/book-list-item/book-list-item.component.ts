import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a.bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styles: []
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
