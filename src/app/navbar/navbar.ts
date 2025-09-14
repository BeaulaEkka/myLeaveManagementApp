import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public auth: Auth) {}
  onLogin() {
    this.auth.login();
    // optional: redirect to dashboard
  }

  onLogout() {
    this.auth.logout();
    // optional: redirect to login
  }
}
