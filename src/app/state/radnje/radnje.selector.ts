import { createSelector } from "@ngrx/store";
import { Radnja } from "src/app/models/radnja";
import { appState } from "../appState";
import { radnjeState } from "./radnjeState";


let selectRadnjeFeature = function(state:appState) {
    return state.radnjeState
}

let selectRadnje = function(state:radnjeState) {
    return state.ids.map(id=>state.entities[id]).filter(c=>c!=null).map(c=><Radnja>c)
}

let radnjeSelector = createSelector(selectRadnjeFeature, selectRadnje)

export {radnjeSelector}