import { createReducer ,on} from "@ngrx/store"
import { loginAdminSuccess, loginKorisnikaSuccess, logoutAdminSuccess, logoutKorisnikSuccess, validirajAdminaFail, validirajAdminaSuccess, validirajKorisnikaSuccess } from "./korisnik.action";
import { korisnikState, TipKorisnika } from "./korisnikState";



let initialState: korisnikState = {
    tip: TipKorisnika.KORISNIK,
    korisnik: null,
}

let korisnikReducer = createReducer(initialState,

    on(validirajKorisnikaSuccess,(state,Korisnik)=>{
        let newState = {...state}
        newState.korisnik = Korisnik
        newState.tip = TipKorisnika.KORISNIK
        return newState
    }),
    on(loginKorisnikaSuccess,(state,Korisnik)=>{
        let newState = {...state}
        newState.korisnik = Korisnik
        newState.tip = TipKorisnika.KORISNIK
        return newState
    }),
    on(logoutKorisnikSuccess,(state)=>{
        let newState = {...state}
        newState.korisnik = null;
        newState.tip = TipKorisnika.KORISNIK
        console.log(newState)
        return newState
    }),
    on(validirajAdminaSuccess,(state,Admin)=>{
        let newState = {...state}
        newState.korisnik = Admin
        newState.tip = TipKorisnika.ADMIN
        return newState
    }),
    on(loginAdminSuccess,(state,Admin)=>{
        let newState = {...state}
        newState.korisnik = Admin
        newState.tip = TipKorisnika.ADMIN
        return newState
    }),
    on(logoutAdminSuccess,(state)=>{
        let newState = {...state}
        newState.korisnik = null;
        newState.tip = TipKorisnika.ADMIN
        console.log(newState)
        return newState
    })
    );

export default korisnikReducer; 