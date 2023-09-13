import { Radnja } from "src/app/models/radnja";
import { Korisnik } from "src/app/models/korisnik";
import { Admin } from "src/app/models/admin";


export enum TipKorisnika {
    KORISNIK="KORISNIK",
    ADMIN="ADMIN"
}

export interface korisnikState {
    tip: TipKorisnika,
    korisnik: Korisnik | Admin |  null
}