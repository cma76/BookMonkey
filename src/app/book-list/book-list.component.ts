import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book, Thumbnail } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    //this.books = this.bs.getAll();
    this.bs.getAll().subscribe(res => this.books = res);
  }
  
  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }

}