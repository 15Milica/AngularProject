import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Radnja } from '../models/radnja';
import { environment } from 'src/environments/environment';
import { Automobil } from '../models/automobil';

@Injectable({
  providedIn: 'root'
})
export class RadnjaService {

  constructor(private httpClient: HttpClient) { }

  preuzmiRadnje() {
    return this.httpClient.get<Radnja[]>(environment.apiURL+"radnja/SveRadnje")
  }

  postaviAutomobilURadnji(idRadnje: number, idAutomobila: number){
    return this.httpClient.put(environment.apiURL+`radnja/DodajAutomobilURadnji/${idRadnje}/${idAutomobila}`,null,{withCredentials:true,responseType:"text"})
  }
  
  dodaj(podaci:any){
    return this.httpClient.post<any>(environment.apiURL+"radnja/DodajRadnju",podaci,{withCredentials:true});
  }
  
  obrisi(id:number) {
    return this.httpClient.delete(environment.apiURL+"radnja/IzbrisiRadnju/"+id,{withCredentials:true,responseType:"text"})
  }

  preuzimiAutomobile(id:number){
    return this.httpClient.get<Automobil[]>(environment.apiURL+"radnja/VratiAutomobileRadnje/"+id)
  }
}
