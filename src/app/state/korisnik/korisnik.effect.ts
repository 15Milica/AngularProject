import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AutentifikacijaService } from 'src/app/services/autentifikacija.service';
import { validirajKorisnika, validirajKorisnikaFail, validirajKorisnikaSuccess, loginKorisnika,loginKorisnikaSuccess, loginKorisnikaFail, registracijaKorisnik, registracijaKorisnikFail, logoutKorisnikSuccess, logoutKorisnikFail, validirajAdmina, validirajAdminaSuccess, validirajAdminaFail, loginAdmin, loginAdminSuccess, loginAdminFail, logoutAdmin, logoutAdminSuccess, logoutAdminFail} from './korisnik.action';
import { logoutKorisnik } from './korisnik.action';
 
@Injectable()
export class KorisnikEffects {
 
     validirajKorisnika$ = createEffect(() =>
     this.actions$.pipe(
               ofType(validirajKorisnika),
               mergeMap(() => this.autenService.validirajKorisnika()
                    .pipe(
                         map(korisnik => (validirajKorisnikaSuccess(korisnik))),
                         catchError(() => of(validirajKorisnikaFail()))
                    )
               )
          )
     );

     loginKorisnika$ = createEffect(() =>
     this.actions$.pipe(
               ofType(loginKorisnika),
               mergeMap(({email,lozinka}) => this.autenService.loginKorisnika(email,lozinka)
               .pipe(
                    map(korisnik => (loginKorisnikaSuccess(korisnik))),
                    catchError((err:HttpErrorResponse) => {
                              console.log(err)
                              alert(err.error.message);
                              return of(loginKorisnikaFail())
                         })
                    )
               )
          )
     );

     logoutKorisnika$ = createEffect(() =>
          this.actions$.pipe(
          ofType(logoutKorisnik),
          mergeMap(() => this.autenService.logOutKorisnik()
               .pipe(
               map(() => {
                    return (logoutKorisnikSuccess())}),
                         catchError((x) => {
                         console.log(x)
                         return of(logoutKorisnikFail())})
                    )
               )
          )
     );

     registrujKorisnika$ = createEffect(() =>
     this.actions$.pipe(
               ofType(registracijaKorisnik),
                    mergeMap((korisnik) => { 
                    let lozinka = korisnik.lozinka;
                    let email = korisnik.email
                    return this.autenService.registracijaKorisnik(korisnik)
                         .pipe(
                              map(korisnik => (loginKorisnika({email,lozinka}))),
                              catchError((x) => {
                                   alert(x.error.message)
                                   return of(registracijaKorisnikFail())})
                         )
                    }
               )
          )
     );

     validirajAdmina$ = createEffect(() =>
     this.actions$.pipe(
               ofType(validirajAdmina),
               mergeMap(() => this.autenService.validirajAdmina()
                    .pipe(
                         map(admin => (validirajAdminaSuccess(admin))),
                         catchError(() => of(validirajAdminaFail()))
                    )
               )
          )
     );

     loginAdmin$ = createEffect(() =>
     this.actions$.pipe(
               ofType(loginAdmin),
               mergeMap(({email,lozinka}) => this.autenService.loginAdmin(email,lozinka)
               .pipe(
                    map(admin => (loginAdminSuccess(admin))),
                    catchError((err:HttpErrorResponse) => {
                              console.log(err)
                              alert(err.error.message);
                              return of(loginAdminFail())
                         })
                    )
               )
          )
     );

     logoutAdmin$ = createEffect(() =>
          this.actions$.pipe(
          ofType(logoutAdmin),
          mergeMap(() => this.autenService.logOutAdmin()
               .pipe(
               map(() => {
                    return (logoutAdminSuccess())}),
                         catchError((x) => {
                         console.log(x)
                         return of(logoutAdminFail())})
                    )
               )
          )
     );

  constructor(
    private actions$: Actions,
    private autenService: AutentifikacijaService
    ) {}
}