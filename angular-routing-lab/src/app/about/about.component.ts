import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] 
})
export class AboutComponent {
  isProfileOpen = false; // Track profile state

  constructor(private router: Router, private route: ActivatedRoute) {}

  openProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route }); // Open profile
    this.isProfileOpen = true;
  }

  closeProfile() {
    this.router.navigate(['/about']); // Close profile and go back to About
    this.isProfileOpen = false;
  }
}
