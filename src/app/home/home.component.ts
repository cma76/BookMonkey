import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
  }
}