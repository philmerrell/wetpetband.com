import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then( m => m.ShowsPageModule)
  },
  {
    path: 'radio-boise',
    loadChildren: () => import('./radio-boise/radio-boise.module').then( m => m.RadioBoisePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
