import { createEntityAdapter } from "@ngrx/entity";
import { createReducer ,on} from "@ngrx/store";
import { Radnja } from "src/app/models/radnja";
import { ucitajRadnjeUspesno } from "./radnje.action";
import { radnjeState } from "./radnjeState";


let adapter = createEntityAdapter<Radnja>()
let initialState:radnjeState = adapter.getInitialState();


let radnjeReducer = createReducer(initialState, 
    on(ucitajRadnjeUspesno,(state,{radnje})=>{
        return adapter.addMany(radnje,state)
    }))

export default radnjeReducer