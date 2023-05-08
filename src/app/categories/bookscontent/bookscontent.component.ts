import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
import { BooksInterface } from 'src/app/admin/books/services/books.interface';
import { BooksService } from 'src/app/admin/books/services/books.service';
import { Categories } from 'src/app/admin/categories/services/categories.interface';


@Component({
  selector: 'app-bookscontent',
  templateUrl: './bookscontent.component.html',
  styleUrls: ['./bookscontent.component.scss']
})
export class BookscontentComponent implements OnInit {

  id: number;
  category_name: string;
  categories: Array<Categories> = [];
  books: BooksInterface[];

  constructor(private booksService: BooksService,
    private route: ActivatedRoute,
    private http: HttpClient,) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.http.get<Categories>('http://localhost:8000/categories/' + id).subscribe(response => {
        console.log(response);
        if (response) {
          this.id = response.id;
          this.category_name = response.category_name;
        }
      })
    })

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.http.get<Array<BooksInterface>>(`http://localhost:8000/categories/${id}/books`).subscribe(data => {
        console.log(data);       
        if (data.length > 0 ) {
          this.books = data;
        }
      })
    })
  }
}


