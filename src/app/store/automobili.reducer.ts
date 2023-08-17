import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on} from "@ngrx/store";
import { Automobil } from "../models/automobil";
import * as Actions from "./automobili.actions";
export interface AutomobilState extends EntityState<Automobil> {
   automobilId: number
}

const adapter = createEntityAdapter<Automobil>();

const initialState : AutomobilState = adapter.getInitialState({
   automobilId: 0
});

export const automobiliReducer = createReducer(
   initialState,
   on(Actions.postaviOcenu, (state, {automobilId, ocena})=>{
       const automobil =  state.entities[automobilId];
       if(automobil){
          return adapter.setOne({...automobil, like: ocena}, state);
       } else {
          return state;
       }
     }
   ),
   on(Actions.ucitajAutomobileKraj, (state, {automobili})=> adapter.setAll(automobili, state)
   ), 
   on(Actions.ucitajAutomobilID, (state, {automobilID}) => ({
      ...state, 
      autmobilId: automobilID
   }))
)