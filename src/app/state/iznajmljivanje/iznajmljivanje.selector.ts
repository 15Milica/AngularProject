import { createSelector } from "@ngrx/store";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";
import { appState } from "../appState";


let selectIznajmnjivnjeFeature = (state:appState)=>{
    return state.iznajmljivanjeState
}

let selectIznajmnjivanja = createSelector(selectIznajmnjivnjeFeature, (state)=>{
    return state.ids.map(id=>state.entities[id]).filter(x=>x!= null).map(x=><Iznajmljivanje>x)
})

export {selectIznajmnjivanja}