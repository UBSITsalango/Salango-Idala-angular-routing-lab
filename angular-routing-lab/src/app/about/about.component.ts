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
}
