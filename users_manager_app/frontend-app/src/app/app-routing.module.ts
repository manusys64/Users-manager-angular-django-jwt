import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard , GuestGuard } from './core';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'login',
  //   component: AuthComponent,
  //   canActivate: [GuestGuard],
  // },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [GuestGuard],
    children: [
      {
            path: '',
            pathMatch: 'full',
            redirectTo: 'login'
        }, 
      {path: 'login', component: LoginComponent}, 
      {path: 'register', component: RegisterComponent},
    ]
  },

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
