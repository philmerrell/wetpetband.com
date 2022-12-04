import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioBoisePage } from './radio-boise.page';

const routes: Routes = [
  {
    path: '',
    component: RadioBoisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioBoisePageRoutingModule {}
