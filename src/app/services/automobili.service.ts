import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Automobil } from '../models/automobil';

@Injectable({
  providedIn: 'root'
})
export class AutomobiliService {

  constructor(private httpClient:HttpClient) {
   }

   vratiAutomobile(){
    return this.httpClient
        .get<Automobil[]>(environment.apiURL+"automobili")
        .pipe(catchError(errorHandle));
   }
}
const errorHandle = (error: HttpErrorResponse) =>
{
  const errorMessage = (error.status === 0) ?
  `Can't connect to API ${error.error}` :
  `Backend returned code ${error.status}`;
  return throwError(errorMessage);
}
