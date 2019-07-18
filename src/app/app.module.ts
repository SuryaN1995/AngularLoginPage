import { LoginComponent } from './login_page/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomMaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoogleSignInComponent} from 'angular-google-signin';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
