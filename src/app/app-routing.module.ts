import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoTableComponent } from './components/compo-table/compo-table.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateComponent } from './components/update/update.component';
import { EsdevenimentsComponent } from './esdeveniments/esdeveniments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'doLoginForm',
    pathMatch: 'full'
  },
  {
    path: 'doLoginForm',
    component: Compo2Component
  },

  {
    path: 'register',
    component: Compo1Component
  },

  {
    path: 'tabla',
    component: CompoTableComponent
  },

  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
