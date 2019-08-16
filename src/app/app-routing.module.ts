import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
 import { DellListComponent } from './dell-list/dell-list.component';


const routes: Routes = [
  { path: 'organisation', component: OrganisationListComponent },
   { path: 'dell', component: DellListComponent },
   {path:'lazy',loadChildren:'./lazy/lazy.module#LazyModule'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
