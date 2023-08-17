import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { ucitajAutomobile } from './store/automobili.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-rent';
  constructor(private store: Store<AppState>){
  }
  ngOnInit(){
     this.store.dispatch(ucitajAutomobile());
  }
}
