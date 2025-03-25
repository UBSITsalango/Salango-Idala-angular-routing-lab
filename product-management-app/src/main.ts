import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    CommonModule,
    ReactiveFormsModule,
    provideRouter(routes),
    FormsModule,
    provideHttpClient()
  ],
}).catch(err => console.error(err));
