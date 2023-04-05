
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],  
})
export class SignupComponent implements OnInit{
  reactiveForm: FormGroup;
  constructor (private signupService: SignupService,
               private router: Router) {}
  

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.signupService.postUser(this.reactiveForm.value).subscribe(data => {
      console.log(data);
      if(data) {
        this.router.navigate(['/auth/login']);
      }
    })
  }

}

