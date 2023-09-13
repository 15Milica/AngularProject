import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Radnja } from '../models/radnja';
import { environment } from 'src/environments/environment';

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
}
