import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Korisnik } from '../models/korisnik';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {
  
  constructor(private httpClient:HttpClient) { }

  validirajKorisnika() : Observable<Korisnik> {
    return this.httpClient.get<Korisnik>(environment.apiURL+"auten",{withCredentials:true});
  }

  loginKorisnika(email: string, lozinka: string) : Observable<Korisnik> {
    return this.httpClient.post<Korisnik>(environment.apiURL+"auth/log-in",{email,lozinka},{withCredentials:true}).pipe(map(x=><Korisnik>x))
  }

  logOutKorisnik() {
    return this.httpClient.post(environment.apiURL+"auth/log-out",null,{withCredentials:true,responseType:"text"});
  }

  registracijaKorisnik(korisnik:Korisnik):Observable<Korisnik>{
    return this.httpClient.post<Korisnik>(environment.apiURL+"auth/register",korisnik,{withCredentials:true})
                .pipe(map(x=><Korisnik>x))
  } 
}
