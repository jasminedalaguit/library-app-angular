import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  hasError: boolean = false;
  errorMessages: string[] = [];

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    });
  }
  onSubmit() {
    console.log(this.reactiveForm);
    console.warn(btoa(this.reactiveForm.value));
    const data = {
      username: this.reactiveForm.get("username").value,
      password: btoa(this.reactiveForm.get("password").value)
    }
    this.loginService.userLogin(data).subscribe({
      next: data => {
        console.log(data)
        if (data) {
          // TODO e save anga api key sta sesson storage name it lib_key
          sessionStorage.setItem('lib_key', data.api_key);
          this.router.navigate(['/admin/categories/categories']);
        }
      }, error: (result) => {
        console.log('oops', result.error);
        this.hasError = true;

        for (let messages of Object.values(result.error)) {
          console.log(messages);

          if (Array.isArray(messages)) {
            for (let index = 0; index < messages.length; index++) {
              const message = messages[index];
              this.errorMessages.push(message)
            }
          } else if (typeof messages === 'string') {
            this.errorMessages.push(messages)
          }
        }
      }
    });
  }
  closeMessage() {
    this.hasError = false;
  }
}
// get(["username", btoa("password")])
