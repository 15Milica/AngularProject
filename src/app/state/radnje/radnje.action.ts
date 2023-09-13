import { createAction ,props} from "@ngrx/store";
import { Radnja } from "src/app/models/radnja";


let ucitajRadnje = createAction("ucitajRadnje");

let ucitajRadnjeUspesno = createAction("ucitajRadnjeUspesno",props<{radnje:Radnja[]}>())

let ucitajRadnjeNeuspesno = createAction("ucitajRadnjeNeuspesno")

export {ucitajRadnje, ucitajRadnjeNeuspesno, ucitajRadnjeUspesno}