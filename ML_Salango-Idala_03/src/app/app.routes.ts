import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuestComponent } from './components/guest/guest.component';
import { ViewProductsComponent } from './components/guest/view-products/view-products.component';
import { UsersComponent } from './components/users/users.component';
import { AddProductsComponent } from './components/users/add-products/add-products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Layout Components
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';

export const routes: Routes = [
  // Root Route (with layout components)
  {
    path: '', 
    component: HeaderComponent,
    children: [
      {
        path: '', // Home route
        component: HomeComponent
      },
      {
        path: 'guest', 
        component: GuestComponent,
        children: [
          { path: 'view-products', component: ViewProductsComponent },
          { path: 'add-products', component: AddProductsComponent },
        ]
      },
      {
        path: 'users', 
        component: UsersComponent
      }
    ],
  },
  
  // Authentication Routes
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  
  // Fallback Route (optional)
  {
    path: '**',
    redirectTo: '',
  }
];
