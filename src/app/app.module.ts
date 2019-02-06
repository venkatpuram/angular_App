import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SigninModule } from './signin/signin.module';
import { CartModule } from './cart/cart.module';
@NgModule({
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninModule,
    CartModule
    // RouterModule.forRoot([
    //   {path:"signin", component:SigninComponent},
    //   { path: '', redirectTo: 'signin', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'signin', pathMatch: 'full' }
      
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
