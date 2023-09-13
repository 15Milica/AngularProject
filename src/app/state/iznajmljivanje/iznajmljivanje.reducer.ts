import { createEntityAdapter } from "@ngrx/entity";
import { createReducer,on } from "@ngrx/store";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";
import {ucitajIznajmljivanjaKorisnikaUspesno } from "./iznajmljivanje.action";
import iznajmljivanjeState from "./iznajmljivanjeState";


let adapter = createEntityAdapter<Iznajmljivanje>()

let initialState:iznajmljivanjeState = {...adapter.getInitialState(),idKorisnika:-1,idSelektovanogIznajmljivanja:-1}

let iznajmljivanjeReducer = createReducer<iznajmljivanjeState>(initialState,
    on(ucitajIznajmljivanjaKorisnikaUspesno,(state,{iznajmljivanja})=>{
        return adapter.setMany(iznajmljivanja,state);
    }))

export default iznajmljivanjeReducer