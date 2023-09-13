import { createSelector } from "@ngrx/store";
import { appState } from "../appState";
import { TipKorisnika } from "./korisnikState";


function selectKorisnikFeature(appState:appState) {
    return appState.korisnikState
}

let korisnikSelektor = createSelector(selectKorisnikFeature,(state)=>state)

export {korisnikSelektor}