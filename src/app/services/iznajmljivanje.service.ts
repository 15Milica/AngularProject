import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iznajmljivanje } from '../models/iznajmljivanje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IznajmljivanjeService {

  
  constructor(private httpClient: HttpClient) { }


  preuzmiIznajmljivanjaKorisnika(id: number) {
    return this.httpClient.get<Iznajmljivanje[]>(environment.apiURL+"iznajmljivanje/preuzmiIznajmljivanjaKorisnikaKorisnik/"+id,{withCredentials:true})
  }

  zavrsiIznajmljivanje(id: number) {
    return this.httpClient.put<Iznajmljivanje>(environment.apiURL+"iznajmljivanje/Zavrsi/"+id,null,{withCredentials:true})
  }

  dodajIznajmljivanje(idAutomobila:number, idKorisnika: number, datum: Date, dana: number) {
    let podaci = {
     datum: datum,
     dana: dana,
     korisnikId: idKorisnika,
     automobilId: idAutomobila
    }
    return this.httpClient.post<Iznajmljivanje>(environment.apiURL+"iznajmljivanje/Dodaj",podaci,{withCredentials:true})
  }

  obrisi(id:number) {
    return this.httpClient.delete(environment.apiURL+"iznajmljivanje/Izbrisi/"+id,{withCredentials:true,responseType:"text"})
  }
}

