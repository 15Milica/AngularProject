import { createAction, props } from "@ngrx/store";
import { Automobil } from "../models/automobil";

export const postaviOcenu = createAction(
    "Postavi ocenu automobilu",
    props<{
        automobilId: number,
        ocena: number
    }>()
)
export const ucitajAutomobileKraj = createAction(
    "Ucitaj automobile kraj",
    props<{
       automobili: Automobil[]
    }>()
)
export const ucitajAutomobile = createAction(
    "Ucitaj autmobile"                            
)
export const ucitajAutomobilID = createAction(
    "Ucitaj automobil po id",
    props<{
        automobilID : number
    }>()
)
