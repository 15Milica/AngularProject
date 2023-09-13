import { createAction,props } from "@ngrx/store";
import { Iznajmljivanje } from "src/app/models/iznajmljivanje";

let ucitajIznajmljivanjaKorisnika = createAction("ucitajIznajmljivanjaKorisnika",props<{id:number}>())

let ucitajIznajmljivanjaKorisnikaUspesno = createAction("ucitajIznajmljivanjaKorisnikaUspesno",props<{iznajmljivanja: Iznajmljivanje[]}>())

let ucitajIznajmljivanjaKorisnikaNeuspesno = createAction("ucitajIznajmljivanjaKorisnikaNeuspesno")

export {ucitajIznajmljivanjaKorisnika, ucitajIznajmljivanjaKorisnikaUspesno, ucitajIznajmljivanjaKorisnikaNeuspesno}