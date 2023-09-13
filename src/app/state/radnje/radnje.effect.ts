import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { RadnjaService } from "src/app/services/radnja.service";
import { ucitajRadnje, ucitajRadnjeNeuspesno, ucitajRadnjeUspesno } from "./radnje.action";


@Injectable()
export class RadnjeEffects {
 
  preuzmiRadnje$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ucitajRadnje),
      mergeMap(() =>{
          
        return this.radnjaService.preuzmiRadnje()
        .pipe(
          map(radnje => (ucitajRadnjeUspesno({radnje}))),
          catchError(() => of(ucitajRadnjeNeuspesno()))
        )
      }
      )
    )
  );
    
 
  constructor(
    private actions$: Actions,
    private radnjaService: RadnjaService
  ) {}
}