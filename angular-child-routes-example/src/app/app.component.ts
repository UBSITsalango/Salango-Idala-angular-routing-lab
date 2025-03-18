import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle = 'Angular 19 Data Binding';
  currentTime = new Date();
  imageUrl = 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww';
  isDisabled = true;
  submitted = false;

  clickCount = 0;

  incrementCount() {
    this.clickCount++;
  }

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value)
  }

  name='';
  email='';
  age='';
  city='';
  hobby='';

  submitForm() {
    this.submitted = true;
  }
}
