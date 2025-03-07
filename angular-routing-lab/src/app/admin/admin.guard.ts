import { Injectable } from '@angular/core';
import { CanActivate, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private readonly adminPassword = 'secure123';
  private isAuthenticated = false; // Reset this when navigating away

  constructor(private router: Router) {
    // Listen for navigation events to reset auth status
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.isAuthenticated = false;
    });
  }

  canActivate(): boolean {
    if (this.isAuthenticated) return true; // Allow access if already authenticated

    if (typeof window !== 'undefined') {
      const userInput = window.prompt('Enter Admin Password:');

      if (userInput !== this.adminPassword) {
        window.alert('Incorrect password! Redirecting to Home.');
        this.router.navigate(['/home']);
        return false;
      }

      this.isAuthenticated = true; // Set auth flag
      return true;
    }

    return false;
  }
}
