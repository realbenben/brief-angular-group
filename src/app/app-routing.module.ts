import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import {PRESENTATIONComponent} from './presentation/presentation.component';
import {MissionsComponent} from './missions/missions.component';
import { FormComponent } from './form/form.component';
import {GalleryComponent} from './gallery/gallery.component';
import { ConsultationsAvanceComponent } from './consultations-avance/consultations-avance.component';
import { AccompagnementComponent } from './accompagnement/accompagnement.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path:'presentation',
    component : PRESENTATIONComponent,
  },
  {
    path:'missions',
    component : MissionsComponent,
  },
  {
    path:'form',
    component : FormComponent,
  },
  {
    path:'gallery',
    component : GalleryComponent,
  },
  {
    path:'consultation',
    component : ConsultationsAvanceComponent,
  },
  {
    path:'accompagnement',
    component : AccompagnementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
