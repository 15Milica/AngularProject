import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Automobil } from 'src/app/models/automobil';
import { faCalendarDays, faCar , faGaugeHigh} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { AutomobilDialogComponent } from '../automobil-dialog/automobil-dialog.component';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { ucitajAutomobile, ucitajAutomobilID } from 'src/app/store/automobili.actions';

@Component({
  selector: 'app-automobil-card',
  templateUrl: './automobil-card.component.html',
  styleUrls: ['./automobil-card.component.css']
})
export class AutomobilCardComponent implements OnInit {
  @Input() automobil : Automobil | null = null;

  iconCar = faCar;
  iconCalendar = faCalendarDays;
  iconGauge = faGaugeHigh;

  constructor(public dialog : MatDialog, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  clicked(){
    if(this.automobil)
    {
      this.store.dispatch(ucitajAutomobilID({automobilID: this.automobil.id}));
      const dialogRef = this.dialog.open(AutomobilDialogComponent) ;
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  }
}
