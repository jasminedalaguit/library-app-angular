
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  reactiveForm: FormGroup;
  successMessage: boolean = false;
  errorMesssage: boolean = false;

  hasError: boolean=false;
  errorMessages: string[] = [];

  constructor(private signupService: SignupService,
    private router: Router) { }


  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.signupService.postUser(this.reactiveForm.value).subscribe({
      next: data => {
      console.log(data)
      if (data) {
        this.successMessage = true;
        this.reactiveForm.reset({});
      }}, error : (result) => {
        console.log('oops', result.error);
        this.hasError = true;
        
        for (let messages of Object.values(result.error)) {
          console.log(messages);

          if (Array.isArray(messages)) {
            for (let index = 0; index < messages.length; index++) {
              const message = messages[index];
              this.errorMessages.push(message)
            }
          }
        } 
      }
    });
  }
  closeSuccessMessage() {
    this.successMessage = false;
  }
  closeErrorMessage() {
    this.hasError = false;
  }
}

