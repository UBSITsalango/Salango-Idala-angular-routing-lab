import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminGuard } from './admin.guard';

export const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent, // Use the AdminComponent for the main admin route
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Admin dashboard route
      { path: 'users', component: UsersComponent } // Admin users route
    ]
  },
  {
    path: '',
    redirectTo: '/parent',
    pathMatch: 'full'
  }
];
