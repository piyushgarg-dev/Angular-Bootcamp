import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';
import { AngularFireModule } from '@angular/fire';

import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const redirectUnauthorizedToLogin= () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { 
  path: 'signin', 
  component: SigninComponent,
  canActivate:[AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInToHome}
  }, 
  {
    path: 'signup',
    component: SignupComponent,

  },
  {
    path: '',
    canActivate:[AngularFireAuthGuard],
    component: HomeComponent,
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
