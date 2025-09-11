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
  http = inject(HttpClient);

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

  onSubmit() {
    if (this.loginForm.valid) {
      const { EmailId, Password } = this.loginForm.value;

      if (EmailId === 'test' && Password === 'test') {
        alert('Login Successful');
      } else {
        alert('Login Failed');
      }

      // Example: real HTTP login
      // this.http.post('/api/login', { EmailId, Password }).subscribe(...)
    } else {
      alert('Please fill out the form correctly');
    }
  }
}
