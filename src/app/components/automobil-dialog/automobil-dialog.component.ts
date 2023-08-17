import { Component, Inject, Input, OnInit } from '@angular/core';
import { Automobil } from 'src/app/models/automobil';
import { faCalendarDays, faCar , faGaugeHigh, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { postaviOcenu } from 'src/app/store/automobili.actions';
import { selectAutomobilID } from 'src/app/store/automobili.selectors';
import { Observable, of} from 'rxjs';
@Component({
  selector: 'app-automobil-dialog',
  templateUrl: './automobil-dialog.component.html',
  styleUrls: ['./automobil-dialog.component.css']
})
export class AutomobilDialogComponent implements OnInit {
  
  automobil: Observable<Automobil | null> = of(null);

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.automobil = this.store.select(selectAutomobilID);
    console.log(this.automobil);
  }

}
