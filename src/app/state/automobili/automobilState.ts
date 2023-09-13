import { EntityState } from "@ngrx/entity";
import { Automobil } from "src/app/models/automobil";

export default interface vozilaState extends EntityState<Automobil> {
    selectedVoziloId: number
}