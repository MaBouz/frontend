import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import {HttpClientModule } from '@angular/common/http';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component'

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AddEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
