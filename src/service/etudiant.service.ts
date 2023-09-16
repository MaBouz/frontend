import { Injectable } from '@angular/core';

import {Etudiant} from '../model/Etudiantmodel'
import{Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'

} )
  };
//const httpoptions={
  //header: new HttpHeaders({'content-Type':'application/json'})
//}

const httpoptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
   'Content-Type':  'application/json',
   'Access-Control-Allow-Methods': 'POST, GET'

  })
};
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
apiURL : string ='http://localhost:8091/etudiant/liste';
  constructor(private http : HttpClient) { }
listeEtudiant(): Observable<Etudiant[]>{
  return this.http.get<Etudiant[]>(this.apiURL);
}

ajouterEtudiant( etd: Etudiant):Observable<Etudiant>{
  return this.http.post<Etudiant>(this.apiURL,etd,httpOptions);
}

supprimerProduit(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }


}
