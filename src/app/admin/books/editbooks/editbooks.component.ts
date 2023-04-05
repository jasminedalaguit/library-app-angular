import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbooks',
  templateUrl: './editbooks.component.html',
  styleUrls: ['./editbooks.component.scss']
})
export class EditbooksComponent implements OnInit{
  reactiveForm: FormGroup;

constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      book_title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      pdf: new FormControl(null, Validators.required),
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
  }
}
