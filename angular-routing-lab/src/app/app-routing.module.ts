import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'users', component: UsersComponent, children: [  // Moved profile under users
      { path: 'profile', component: ProfileComponent }
    ] 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate: [AdminGuard]  // Protects admin route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
