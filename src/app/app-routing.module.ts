import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path : "etudiant",component : EtudiantComponent},
  {path : "addetudiant",component : AddEtudiantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
