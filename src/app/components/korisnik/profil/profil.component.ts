import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, map, take} from 'rxjs';
import { Iznajmljivanje } from 'src/app/models/iznajmljivanje';
import { IznajmljivanjeService } from 'src/app/services/iznajmljivanje.service';
import { appState } from 'src/app/state/appState';
import { logoutKorisnik } from 'src/app/state/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/state/korisnik/korisnik.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private store: Store<appState>,private iznajmljivanjeService: IznajmljivanjeService) { }

  ngOnInit(): void {
    this.store.select(korisnikSelektor)
              .subscribe(x=>{
                if(x.korisnik)
                  this.iznajmljivanja = this.iznajmljivanjeService.preuzmiIznajmljivanjaKorisnika(x.korisnik?.id)
              })  
  }

  iznajmljivanja : Observable<Iznajmljivanje[]> = of([])
  postoji: boolean = true;

  rokZaVracanje(iznajmljivanje: Iznajmljivanje) {
    let datum = new Date(iznajmljivanje.datum)
    let rok = new Date()
    rok.setDate(datum.getDate()+iznajmljivanje.dana)
    return rok.toLocaleDateString()
  }

  kasni(iznajmljivanje: Iznajmljivanje) {
    let datum = new Date(iznajmljivanje.datum)
    let rok = new Date()
    rok.setDate(datum.getDate()+iznajmljivanje.dana)
    return rok.getDate() - new Date(Date.now()).getDate()
  }

  status(iznajmljivanje: Iznajmljivanje) {
    if(iznajmljivanje.zavrseno) return "zavrseno";
    return "nije zavrseno"
  }

  logout(){
    this.store.dispatch(logoutKorisnik());
  }
  zavrsi(iznajmljivanje: Iznajmljivanje){
    this.iznajmljivanjeService.zavrsiIznajmljivanje(iznajmljivanje.id).subscribe(x=>{
      iznajmljivanje.zavrseno = true;
    })
  }
  obrisi(iznajmljivanje: Iznajmljivanje){
    this.iznajmljivanjeService.obrisi(iznajmljivanje.id).subscribe(x=>{
       alert("Izbrisali ste iznajmljivanje")
       this.postoji = false;
    })
  }
}
