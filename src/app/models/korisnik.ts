import { Iznajmljivanje } from "./iznajmljivanje"
import { Like } from "./like"

export interface Korisnik {
     id: number,
     ime: string,
     prezime: string,
     email: string,
     lozinka: string,
     likes: Like[] | undefined, 
     iznajmljivanja: Iznajmljivanje[] | undefined
}