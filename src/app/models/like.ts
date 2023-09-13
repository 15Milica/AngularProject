import { Automobil } from "./automobil";
import { Korisnik } from "./korisnik";

export interface Like{
     id: number,
     automobil: Automobil | undefined,
     korisnik: Korisnik | undefined
}