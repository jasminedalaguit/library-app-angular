import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../services/books.interface';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../../categories/services/categories.interface';
import { HttpClient } from '@angular/common/http';
import { LogoutService } from 'src/app/auth/logout/services/logout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  reactiveForm: FormGroup;
  books: Array<BooksInterface> = [];
  categories: Array<Categories> = [];

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private logoutService: LogoutService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(data => {
      this.books = data;
    })
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onLogout() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.logoutService.userLogout().subscribe({
      next: data => {
      console.log(data)
      if(data) {
        sessionStorage.clear();
        this.router.navigate(['/auth/login']);
      }
    }
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
