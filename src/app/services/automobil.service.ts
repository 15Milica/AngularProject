import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Automobil } from '../models/automobil';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomobilService {

  constructor(private httpClient: HttpClient) { }

  preuzmiSveAutomobile() {
    return this.httpClient.get<Automobil[]>(environment.apiURL+"automobil/SviAutomobili")
  }

  automobilLajkovi(id:number) {
    return this.httpClient.get<number>(environment.apiURL+`like/LikoviVozila/${id}`)
  }

  preuzmiLike(idKorisnika: number, idAutomobila: number){
    return this.httpClient.get<number>(environment.apiURL+`like/KorisnikLikeAutomobil/${idKorisnika}/${idAutomobila}`,{withCredentials:true})
  }
  
  lajkuj(idKorisnika: number, idAutomobila: number){
    return this.httpClient.post<number>(environment.apiURL+"like/DodajLike/"+idAutomobila+"/"+idKorisnika,null,{withCredentials:true}).pipe(map(x=><number>x))
  }

  dislike(id: number) {
    return this.httpClient.delete(environment.apiURL+"like/ObrisiLike/"+id,{withCredentials:true})
  }

  dodaj(podaci:any){
    return this.httpClient.post<any>(environment.apiURL+"automobil/Dodaj",podaci,{withCredentials:true});
  }

  obrisi(id:number) {
    return this.httpClient.delete(environment.apiURL+"automobil/Obrisi/"+id,{withCredentials:true,responseType:"text"})
  }
}
