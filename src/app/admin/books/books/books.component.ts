import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../services/books.interface';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Array<BooksInterface> = [];

  constructor(
    private booksService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  onDelete(id) {
    this.booksService.deleteBooks(id).subscribe(data => {
      console.log(data)
      if (data) {
        this.booksService.getBooks().subscribe(data => {
          this.books = data;
        })
      }
    })
  }
}
