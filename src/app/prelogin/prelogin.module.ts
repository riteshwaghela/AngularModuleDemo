import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent,
  },
  {
    path: 'contact', component: ContactComponent , pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent , pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
})
export class PreLoginModule { }
