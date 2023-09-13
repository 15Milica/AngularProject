import { createSelector } from "@ngrx/store";
import { Automobil } from "src/app/models/automobil";
import { appState } from "../appState";

function selectAutomobilFeature(appState:appState) {
    return appState.automobiliState
}

let AutomobilSelector= createSelector(selectAutomobilFeature,(state)=>{
    return state.ids.map(id=>state.entities[id]).filter(e=>e!=null).map(e=><Automobil>e);
})

let odabranoAutomobilSelector = createSelector(selectAutomobilFeature,(state)=>{
    return state.entities[state.selectedVoziloId];
})

export {odabranoAutomobilSelector}

export default AutomobilSelector