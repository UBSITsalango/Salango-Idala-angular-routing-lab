import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { HeaderComponent } from './app/layouts/header/header.component';
import { SidebarComponent } from './app/layouts/sidebar/sidebar.component';
import { FooterComponent } from './app/layouts/footer/footer.component';

// Bootstrap the application with components and routes
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ]
}).catch(err => console.error(err));

