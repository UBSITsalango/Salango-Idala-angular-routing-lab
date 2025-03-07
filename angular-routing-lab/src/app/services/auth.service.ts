import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminUser = true;

  constructor() {}

  isAdmin(): boolean {
    return this.isAdminUser;
  }

  loginAsAdmin() {
    this.isAdminUser = true;
  }

  logout() {
    this.isAdminUser = false;
    console.log('Admin logged out');
  }
}
