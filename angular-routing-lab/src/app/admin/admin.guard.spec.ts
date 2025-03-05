import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,  // ✅ Add this parameter
    state: RouterStateSnapshot     // ✅ Add this parameter
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = false; // Change this to actual authentication logic

    if (!isAuthenticated) {
      this.router.navigate(['/home']); // Redirect to home if not authenticated
      return false;
    }

    return true;
  }
}
