import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

import { Book, Thumbnail } from './book';
import { BookFactory } from './book-factory';
import { BookRaw } from './book-raw';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  //books: Book[];

  //private api = 'https://book-monkey2-api.angular-buch.com';
  //private api = 'http://52.16.13.153:3001';
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}


  private errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(error.message);
  }


  getAll(): Observable<Book[]> {

    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(BookFactory.fromObjectArray),
        catchError(this.errorHandler)
      );


/*
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => BookFactory.fromObjectArray(rawBooks)),
        catchError(this.errorHandler)
      );
*/

/*
    return this.http.get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks.map(rawBook => BookFactory.fromObject(rawBook))),
        catchError(this.errorHandler)
      );
*/
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`)
      .pipe(
        retry(3),
        map(BookFactory.fromObject),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

/*
  constructor() {
    this.books = [
      new Book(
        '9783864903571',
        'Angular',
        ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
        new Date(2017, 3, 1),
        'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4, inklusive NativeScript und Redux',
        5,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
        'Mit Angular setzen Sie auf ein modernes und modulares...'
      ),
      new Book(
        '9783864901546',
        'AngularJS',
        ['Philipp Tarasiewicz', 'Robin Böhm'],
        new Date(2014, 5, 29),
        'Eine praktische Einführung',
        3,
        [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')],
        'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
      )
    ];
  }

*/

/*
  getAll() {
    console.table(this.books);
    return this.books;
  }

  getSingle(isbn) {
    return this.books.find(book => book.isbn === isbn);
  }
*/
}
