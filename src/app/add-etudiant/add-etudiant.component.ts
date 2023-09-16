import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../model/Etudiantmodel';
import {EtudiantService} from '../../service/etudiant.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  newEtudiant = new Etudiant();
  constructor(
    private router :Router,
    private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }
  addEtudiant(){
    this.etudiantService.ajouterEtudiant(this.newEtudiant)
    .subscribe(etd => {
    console.log(etd);
    });
    //this.router.navigate(['etudiant']);
    }

}
