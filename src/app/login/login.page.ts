import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup

  constructor(private router:Router , private formBuilder: FormBuilder  , private AuthService:AuthService , private toastr: ToastrService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.AuthService.login(email, password).subscribe({
      next:(response: any) => {
        // Handle the successful login response here
        // You can access the response data using the 'response' parameter
        this.router.navigateByUrl('/home')      },
      error:(error: any) => {
        // Handle any error that occurs during the login process
        // You can access the error details using the 'error' parameter
        this.toastr.success('Hello, World!', 'Toast Title');




        console.error('Login error', error.message);
      }
     } );

}
}
