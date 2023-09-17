import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from './state/appState';
import { validirajAdmina, validirajKorisnika } from './state/korisnik/korisnik.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-rent';
  constructor(private store: Store<appState>){}
  ngOnInit(){
    this.store.dispatch(validirajAdmina())
    this.store.dispatch(validirajKorisnika())
  }
}
