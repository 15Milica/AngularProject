import { createSelector } from "@ngrx/store";
import { appState } from "../appState";
import { TipKorisnika } from "./korisnikState";
import { Admin } from "src/app/models/admin";

function selectKorisnikFeature(appState:appState) {
    return appState.korisnikState
}

let korisnikSelektor = createSelector(selectKorisnikFeature,(state)=>state)

let adminSelector = createSelector(selectKorisnikFeature, (state)=>{
    if(state.tip == TipKorisnika.ADMIN) return <Admin>state.korisnik
    return null
})

export {korisnikSelektor, adminSelector}