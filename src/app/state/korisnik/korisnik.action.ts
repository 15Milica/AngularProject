import { createAction, props } from "@ngrx/store";
import { Korisnik } from "src/app/models/korisnik";



let validirajKorisnika = createAction("ValidirajKorisnika")

let validirajKorisnikaSuccess = createAction("ValidirajKorisnikaSucces", props<Korisnik>())

let validirajKorisnikaFail = createAction("ValidirajKorisnikaFail");

let loginKorisnika = createAction("loginKorisnika", props<{email:string,lozinka:string}>())

let loginKorisnikaSuccess = createAction("loginKorisnikaSucces", props<Korisnik>())

let loginKorisnikaFail = createAction("loginKorisnikaFail");

let logoutKorisnik = createAction("LogoutKorisnik")

let logoutKorisnikSuccess = createAction("LogoutKorisnikSuccess");

let logoutKorisnikFail = createAction("LogoutKorisnikFail")

let registracijaKorisnik = createAction("RegistracijaKorisnik", props<Korisnik>())

let registracijaKorisnikFail = createAction("RegistracijaKorisnikFail")


export {registracijaKorisnik,registracijaKorisnikFail}
export {loginKorisnika,loginKorisnikaFail,loginKorisnikaSuccess}
export {logoutKorisnik, logoutKorisnikSuccess,logoutKorisnikFail}
export {validirajKorisnika,validirajKorisnikaSuccess,validirajKorisnikaFail}