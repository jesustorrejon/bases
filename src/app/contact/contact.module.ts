import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IonContent } from '@ionic/angular/standalone';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    FormContactComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    IonContent
  ]
})

export class ContactModule { }
