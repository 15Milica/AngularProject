import { Automobil } from "./automobil";
import { Korisnik } from "./korisnik";

export interface Iznajmljivanje{
     id: number,
     datum: Date,
     dana: number,
     zavrseno: boolean,
     vozilo:string,
     cenaUkupna: number
}