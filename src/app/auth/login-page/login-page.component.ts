import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'core/services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  errorText: string = '';

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.authService.login('user2@mail.ru', '123').subscribe(
      (data)=>console.log(data)
    )
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(
      (result) => {
        if (typeof result === 'number') {
          this.authService.saveUserIdToLocalStorage(result);
          this.router.navigate(['/home']);
        } else {
          this.errorText = result;
        }
      }
    );
  }

}
