import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/state/appState';
import { logoutKorisnik } from 'src/app/state/korisnik/korisnik.action';
import { korisnikSelektor } from 'src/app/state/korisnik/korisnik.selector';
import { korisnikState } from 'src/app/state/korisnik/korisnikState';
@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  constructor(private store:Store<appState>, private router:Router) { }

  korisnik: Observable<korisnikState> = this.store.select(korisnikSelektor);
  logedin: boolean = false;

  ngOnInit(): void {
    this.korisnik.subscribe(x=>{
      if(x.korisnik != null) this.logedin = true;
      else this.logedin = false;
    })
    this.router.navigateByUrl("/")
  }
  logout(){
    this.store.dispatch(logoutKorisnik())
    let s = this.store.select("korisnikState").subscribe(x=>{
      if(x.korisnik == null){
        this.router.navigateByUrl("/");
        s.unsubscribe();
      }
    })
  }
}
