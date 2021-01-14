import { SorucevaplaComponent } from './components/sorucevapla/sorucevapla.component';
import { SorusilComponent } from './components/sorusil/sorusil.component';
import { SoruduzenleComponent } from './components/soruduzenle/soruduzenle.component';
import { SorudetayComponent } from './components/sorudetay/sorudetay.component';


import { SoruekleComponent } from './components/soruekle/soruekle.component';

import { SoruComponent } from './components/soru/soru.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLogin = () => redirectUnauthorizedTo(['/login']);
const routes: Routes = [

  {
    path: '',
    component:
      HomeComponent,

    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'soru',
    component: SoruComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'soruekle',
    component: SoruekleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sorudetay/:key',
    component: SorudetayComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'soruduzenle/:key',
    component: SoruduzenleComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sorusil/:key',
    component: SorusilComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },


  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sorucevapla', component: SorucevaplaComponent },
  { path: 'sorucevapla/:key', component: SorucevaplaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
