import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  isProfileOpen = false; // Track profile state

  constructor(private router: Router, private route: ActivatedRoute) {}

  openProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route }); // Open profile
    this.isProfileOpen = true;
  }

  closeProfile() {
    this.router.navigate(['/users']); // Close profile and go back to Users
    this.isProfileOpen = false;
  }
}
