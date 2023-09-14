import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/state/appState';
import { logoutAdmin } from 'src/app/state/korisnik/korisnik.action';
import { adminSelector } from 'src/app/state/korisnik/korisnik.selector';
import { korisnikState } from 'src/app/state/korisnik/korisnikState';

@Component({
  selector: 'app-pocetna-admin',
  templateUrl: './pocetna-admin.component.html',
  styleUrls: ['./pocetna-admin.component.css']
})
export class PocetnaAdminComponent implements OnInit {

  constructor(private store:Store<appState>, private router:Router) { }
  logedin: boolean = false;

  ngOnInit(): void {
    this.store.select("korisnikState").subscribe(x=>{
      if(x.korisnik != null){
        this.logedin = true;

      }else this.logedin = false;
    })
  }
  logout(){
    this.store.dispatch(logoutAdmin())
    let s = this.store.select("korisnikState").subscribe(x=>{
      if(x.korisnik == null){
        this.router.navigateByUrl("/admin");
        s.unsubscribe();
      }
    })
  }

}
