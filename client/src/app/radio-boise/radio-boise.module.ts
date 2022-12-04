import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioBoisePageRoutingModule } from './radio-boise-routing.module';

import { RadioBoisePage } from './radio-boise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioBoisePageRoutingModule
  ],
  declarations: [RadioBoisePage]
})
export class RadioBoisePageModule {}
