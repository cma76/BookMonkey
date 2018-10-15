import { BookStoreService } from './book-store.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService implements Resolve<Book> {

  constructor(private bs: BookStoreService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    return this.bs.getSingle(route.params['isbn']);
  }
}
