import { Automobil } from "./automobil"

export interface Radnja{
     id: number,
     naziv: string,
     adresa: string,
     telefon:string, 
     slika: string
     automobili: Automobil[] | undefined
}