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

  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl(''),
  });

  http = inject(HttpClient);
  onLogin() {
    const formValue = this.loginForm.value;
    this.http.post('https://localhost:44369/api/User/Login', formValue).subscribe({
      next: (response: any) => {
        if (response.result) {
          alert('Login Successful');
        } else {
          alert('Invalid Credentials');
        }
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }
}
