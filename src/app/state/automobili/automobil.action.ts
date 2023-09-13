import { createAction, props } from "@ngrx/store";

import { Automobil } from "src/app/models/automobil";


let ucitajSveAutomobile = createAction("ucitajSveAutomobile")

let ucitajSveAutomobileUspesno = createAction("ucitajSveAutomobileUspesno", props<{automobili:Automobil[]}>())

let ucitajSveAutomobileNeuspesno = createAction("ucitajSveAutomobileNeuspesno")

let selectVozilo = createAction("selectVozilo", props<{id:number}>())

export {ucitajSveAutomobile, ucitajSveAutomobileUspesno, ucitajSveAutomobileNeuspesno, selectVozilo}