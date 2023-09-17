import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Korisnik } from '../models/korisnik';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {
  
  constructor(private httpClient:HttpClient) { }

  validirajKorisnika() : Observable<Korisnik> {
    return this.httpClient.get<Korisnik>(environment.apiURL+"auth",{withCredentials:true});
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
  
  validirajAdmina() : Observable<Admin>{
    return this.httpClient.get<Admin>(environment.apiURL+"auth-admin/Validiraj",{withCredentials:true});
  }

  loginAdmin(email: string, lozinka: string) : Observable<Admin> {
    return this.httpClient.post<Admin>(environment.apiURL+"auth-admin/log-in",{email,lozinka},{withCredentials:true}).pipe(map(x=><Admin>x))
  }

  logOutAdmin() {
    return this.httpClient.post(environment.apiURL+"auth-admin/log-out",null,{withCredentials:true,responseType:"text"});
  }
}
