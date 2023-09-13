import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { IznajmljivanjeService } from "src/app/services/iznajmljivanje.service";
import { ucitajIznajmljivanjaKorisnika, ucitajIznajmljivanjaKorisnikaNeuspesno, ucitajIznajmljivanjaKorisnikaUspesno } from "./iznajmljivanje.action";


@Injectable()
export class IznajmljivanjaEffects {
 
  preuzmiIznajmljivanjaKorisnika$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ucitajIznajmljivanjaKorisnika),
      mergeMap(({id}) =>this.iznajmljivanjeService.preuzmiIznajmljivanjaKorisnika(id)
          .pipe(
              map(iznajmljivanja => (ucitajIznajmljivanjaKorisnikaUspesno({ iznajmljivanja }))),
              catchError(() => of(ucitajIznajmljivanjaKorisnikaNeuspesno()))
          )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private iznajmljivanjeService: IznajmljivanjeService
  ) {}
}