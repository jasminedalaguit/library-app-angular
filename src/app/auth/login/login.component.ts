import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  reactiveForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router) {}

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    console.log(this.reactiveForm);
    console.warn(this.reactiveForm.value);
    this.loginService.userLogin(this.reactiveForm.value).subscribe(data => {
      console.log(data)
      if(data = true) {
        this.router.navigate(['/admin/categories/categories']);
      }
  })
}
}
