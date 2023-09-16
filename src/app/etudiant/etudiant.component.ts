import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../model/Etudiantmodel';
import {EtudiantService} from '../../service/etudiant.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
etudiant!:Etudiant[];
  constructor(private etudiantservice: EtudiantService,
    private router : Router) { }

  ngOnInit(): void {
    this.etudiantservice.listeEtudiant().subscribe(etds=> {
      console.log(etds);
      this.etudiant=etds;

    });
  }
  supprimerProduit(p: Etudiant)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.etudiantservice.supprimerProduit(p.idEtudiant).subscribe(() => {
  console.log("produit supprimé");
  });
  this.router.navigate(['etudiant']).then(() => {
  window.location.reload();
  });
  }

}
