import { createEntityAdapter } from "@ngrx/entity";
import { createReducer , on} from "@ngrx/store";
import { Automobil } from "src/app/models/automobil";
import { ucitajSveAutomobileUspesno, selectVozilo } from "./automobil.action";
import automobilState from "./automobilState";

let adapter = createEntityAdapter<Automobil>()

let initialState: automobilState = {...adapter.getInitialState(),selectedVoziloId:-1}

let automobilReducer = createReducer<automobilState>(initialState,
        on(ucitajSveAutomobileUspesno,(state,{automobili})=>{
            return adapter.setAll(automobili,state);
        }),
        on(selectVozilo,(state,{id})=>{
            let newState = <automobilState>{...state}
            newState.selectedVoziloId = id;
            return newState
        })
    )

export default automobilReducer;