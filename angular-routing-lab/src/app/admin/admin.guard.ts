import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {} // Inject Router to handle redirection

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Simulated authentication logic
    const isAuthenticated = false; // Change this to your actual authentication check

    if (isAuthenticated) {
      return true; // Allow access
    } else {
      return this.router.parseUrl('/home'); // Redirect unauthorized users
    }
  }
}
