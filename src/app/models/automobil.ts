import { Iznajmljivanje } from "./iznajmljivanje";
import { Like } from "./like";
import { Radnja } from "./radnja";
import { SlikaAutomobila } from "./slikaAutomobila";

export interface Automobil
{
   id: number,
   marka: string,
   model: string, 
   godina: number,
   specifikacije: string,
   cena: number, 
   radnja: Radnja | undefined,
   likes: Like[] | undefined,
   slike: SlikaAutomobila[] | undefined,
   iznajmljivanje: Iznajmljivanje[] | undefined
}
