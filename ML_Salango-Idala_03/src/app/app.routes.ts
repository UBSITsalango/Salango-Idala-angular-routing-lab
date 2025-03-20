import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuestComponent } from './components/guest/guest.component';
import { ViewProductsComponent } from './components/guest/view-products/view-products.component';
import { UsersComponent } from './components/users/users.component';
import { AddProductsComponent } from './components/users/add-products/add-products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  // Default route for HomeComponent
  { path: '', component: HomeComponent },

  // Guest Routes
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      { path: 'view-products', component: ViewProductsComponent },
    ],
  },

  // Users Route
  { 
    path: 'users', 
    component: UsersComponent,
    children: [
      { path: 'add-products', component: AddProductsComponent },
    ],
  },

  // Authentication Routes
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  // Fallback Route (optional)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
