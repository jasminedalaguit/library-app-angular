import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../services/books.interface';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../../categories/services/categories.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Array<BooksInterface> = [];
  categories: Array<Categories> = [];

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

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
