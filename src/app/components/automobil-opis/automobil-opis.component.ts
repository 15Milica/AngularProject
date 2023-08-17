import { Component, Input, OnInit } from '@angular/core';
import { Automobil } from 'src/app/models/automobil';
import { faCalendarDays, faCar , faGaugeHigh, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'src/app/store/app-state';
import { Store } from '@ngrx/store';
import { postaviOcenu } from 'src/app/store/automobili.actions';
@Component({
  selector: 'app-automobil-opis',
  templateUrl: './automobil-opis.component.html',
  styleUrls: ['./automobil-opis.component.css']
})
export class AutomobilOpisComponent implements OnInit {
  @Input() auto: Automobil | null = null;

  iconCar = faCar;
  iconCalendar = faCalendarDays;
  iconGauge = faGaugeHigh;
  iconLike = faThumbsUp;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.auto);
  }
  oceni()
  {
    if(this.auto)
    {
    this.auto = {...this.auto, like: this.auto.like+1};
    this.store.dispatch(postaviOcenu({automobilId: this.auto.id, ocena: this.auto.like}))
    }
  }
}
