import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { MissionsComponent } from './missions/missions.component';
<<<<<<< HEAD
import { PRESENTATIONComponent } from './presentation/presentation.component';
=======
import { GalleryComponent } from './gallery/gallery.component';
>>>>>>> fe8bc3eec7bf02269d57caaa2212622ae82abb4a
import { SectionTitleComponent } from './section-title/section-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    FooterComponent,
    MissionsComponent,
<<<<<<< HEAD
    PRESENTATIONComponent,
    SectionTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    GalleryComponent,
    SectionTitleComponent,
>>>>>>> fe8bc3eec7bf02269d57caaa2212622ae82abb4a
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
