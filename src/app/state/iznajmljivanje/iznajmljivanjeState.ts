import { EntityState } from "@ngrx/entity";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";

export default interface iznajmljivanjeState extends EntityState<Iznajmljivanje> {
    idKorisnika:number,
    idSelektovanogIznajmljivanja: number
}