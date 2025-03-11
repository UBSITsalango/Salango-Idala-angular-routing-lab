import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName: string = 'Tyrone Salango';
  userRole: string = 'Full-Stack Developer';
  userLocation: string = 'Baguio, Philippines';
  userEmail: string = 'tyrone@example.com';
  userContact: string = '0912-345-6789';
  userImage: string = 'https://images.unsplash.com/photo-1557447928-9a1ca5819ed6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
}
