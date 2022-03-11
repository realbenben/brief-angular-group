import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConctactComponent } from './conctact/conctact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { MissionsComponent } from './missions/missions.component';
import { PRESENTATIONComponent } from './presentation/presentation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ConsultationsAvanceComponent } from './consultations-avance/consultations-avance.component';
import { AccompagnementComponent } from './accompagnement/accompagnement.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ConctactComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
    MissionsComponent,
    PRESENTATIONComponent,
    SectionTitleComponent,

    GalleryComponent,

    SectionTitleComponent,
    ConsultationsAvanceComponent,
    AccompagnementComponent,

    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
