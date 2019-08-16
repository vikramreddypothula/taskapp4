import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
// import {Users} from './organisation-list/Users';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { DellListComponent } from './dell-list/dell-list.component';
import { DialogHtmComponent } from './dialog-htm/dialog-htm.component';
//import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    
    OrganisationListComponent,
    
    DellListComponent,
    
    DialogHtmComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
 entryComponents: [
    DialogHtmComponent
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
