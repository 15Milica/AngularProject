import { radnjeState } from "./radnje/radnjeState";
import iznajmljivanjeState from "./iznajmljivanje/iznajmljivanjeState";
import { korisnikState } from "./korisnik/korisnikState";
import automobilState from "./automobili/automobilState";

export interface appState {
    korisnikState: korisnikState,
    radnjeState:radnjeState,
    automobiliState:automobilState,
    iznajmljivanjeState:iznajmljivanjeState
}