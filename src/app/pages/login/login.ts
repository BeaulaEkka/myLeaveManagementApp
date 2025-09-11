import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // You can add authentication logic here
  }

  // ✅ Reactive form setup
  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  });

  http = inject(HttpClient);
  onLogin() {
    if (this.loginForm.EmailId == 'test' || this.loginForm.Password == 'test') {
      alert('Login Successfull');
    } else {
      alert('Login Failed');
    }
  }
}
