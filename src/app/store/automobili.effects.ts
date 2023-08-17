import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AutomobiliService} from "../services/automobili.service";
import * as ActionsAutomobili from './automobili.actions';


@Injectable()
export class AutomobiliEffect {
    constructor(private automobiliService: AutomobiliService, private actions$: Actions) { }

    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionsAutomobili.ucitajAutomobile),
            mergeMap(() => this.automobiliService.vratiAutomobile()
                .pipe(
                    map((automobili) => (ActionsAutomobili.ucitajAutomobileKraj({automobili}))),
                    catchError(() => of({ type: "load error" }))
                )
            )
        )
    )
}