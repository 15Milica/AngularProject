import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { AutomobilService } from "src/app/services/automobil.service";
import { ucitajSveAutomobile, ucitajSveAutomobileNeuspesno, ucitajSveAutomobileUspesno } from "./automobil.action";

@Injectable()
export class AutomobilEffects {
 

    preuzmiSvaAutomobile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ucitajSveAutomobile),
      mergeMap(() =>{
          
        return this.automobilService.preuzmiSveAutomobile()
        .pipe(
          map(automobili => (ucitajSveAutomobileUspesno({automobili}))),
          catchError(() => of(ucitajSveAutomobileNeuspesno()))
        )
      }
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private automobilService: AutomobilService
  ) {}
}