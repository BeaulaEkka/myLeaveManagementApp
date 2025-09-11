import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);

  // ✅ Reactive form setup
  loginForm = new FormGroup({
    EmailId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { EmailId, Password } = this.loginForm.value;

      if (EmailId === 'test' && Password === 'test') {
        this.router.navigate(['/dashboard']);
        alert('Login Successful');
      } else {
        alert('Login Failed');
      }


    } else {
      alert('Please fill out the form correctly');
    }
  }
}
