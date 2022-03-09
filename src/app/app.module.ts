import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ConctactComponent } from './conctact/conctact.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
>>>>>>> fc72b73d3c0e12b26d3a4753f656a095fe212f03

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ConctactComponent
=======
    NavbarComponent,
    FormComponent,
    FooterComponent
>>>>>>> fc72b73d3c0e12b26d3a4753f656a095fe212f03
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
