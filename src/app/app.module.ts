import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreLoginModule }  from './prelogin/prelogin.module';
import { MobileModule } from './mobile/mobile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PreLoginModule,
    MobileModule.forRoot( {
      brand : 'oneplus',
      price: 20000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
