import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { BookFactory } from '../../shared/book-factory';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

/*
  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();
*/

  book: Book = BookFactory.empty();

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    // this.book = this.bs.getSingle(params['isbn']);
    this.bs.getSingle(params['isbn']).subscribe(retrievedBook => this.book = retrievedBook);
  }

  getRating(num: number) {
    return new Array(num);
  }

/*
  showBookList() {
    this.showListEvent.emit();
  }
*/

}
