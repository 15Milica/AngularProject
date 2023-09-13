import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private httpClient: HttpClient) { }

  preuzmiKorisnike(email:string) {
    return this.httpClient.get<Korisnik[]>(environment.apiURL+"korisnik/PretraziKorisnike/"+email,{withCredentials:true})
  }
}
