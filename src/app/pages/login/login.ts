import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);

  // ✅ Reactive form setup
  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
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
