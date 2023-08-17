import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Automobil } from "../models/automobil";
import { AppState } from "./app-state";
import { AutomobilState } from "./automobili.reducer";

export const selectAutomobiliFeature = createSelector(  
    (state: AppState) => state.automobili,
    (automobili) => automobili
);
export const selectSviAutomobili = createSelector(
    selectAutomobiliFeature,
    (state: AutomobilState) => Object.values(state.entities)
         .filter(autmobil => autmobil != null)
         .map(autmobil => <Automobil>autmobil)
);

export const selectAutomobili = createSelector(
    selectAutomobiliFeature,
    (state: AutomobilState) => state.entities
); 
export const selectIDAutomobila = createSelector(
    selectAutomobiliFeature,
    (state: AutomobilState) => state.automobilId
);
export const selectAutomobilID = createSelector(
    selectSviAutomobili,
    selectIDAutomobila,
    (automobili, automobilId) => automobili[automobilId] ?? null
);