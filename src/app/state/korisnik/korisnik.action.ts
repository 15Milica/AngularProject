import { createAction, props } from "@ngrx/store";
import { Korisnik } from "src/app/models/korisnik";
import { Admin } from "src/app/models/admin";

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

let loginAdmin = createAction("loginAdmin", props<{email:string,lozinka:string}>())

let loginAdminSuccess = createAction("loginAdminSucces", props<Admin>())

let loginAdminFail = createAction("loginAdminFail");

let logoutAdmin = createAction("LogoutAdmin")

let logoutAdminSuccess = createAction("LogoutAdminSuccess");

let logoutAdminFail = createAction("LogoutAdminFail")

let validirajAdmina = createAction("ValidirajAdmina")

let validirajAdminaSuccess = createAction("ValidirajAdminaSucces", props<Admin>())

let validirajAdminaFail = createAction("ValidirajAdminaFail");

export {logoutAdmin, logoutAdminSuccess, logoutAdminFail, validirajAdmina, validirajAdminaSuccess, validirajAdminaFail}
export {loginAdmin, loginAdminSuccess, loginAdminFail}
export {registracijaKorisnik,registracijaKorisnikFail}
export {loginKorisnika,loginKorisnikaFail,loginKorisnikaSuccess}
export {logoutKorisnik, logoutKorisnikSuccess,logoutKorisnikFail}
export {validirajKorisnika,validirajKorisnikaSuccess,validirajKorisnikaFail}