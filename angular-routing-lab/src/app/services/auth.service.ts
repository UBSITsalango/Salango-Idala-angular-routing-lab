import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = { isAdmin: true };

  isAdmin(): boolean {
    return this.user.isAdmin;
  }
}
