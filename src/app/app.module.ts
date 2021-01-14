import { SorucevaplaComponent } from './components/sorucevapla/sorucevapla.component';
import { SorusilComponent } from './components/sorusil/sorusil.component';
import { SoruduzenleComponent } from './components/soruduzenle/soruduzenle.component';
import { SorudetayComponent } from './components/sorudetay/sorudetay.component';
import { SoruComponent } from './components/soru/soru.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { SoruekleComponent } from './components/soruekle/soruekle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SoruComponent,
    SoruekleComponent,
    SorudetayComponent,
    SoruduzenleComponent,
    SorusilComponent,
    SorucevaplaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
