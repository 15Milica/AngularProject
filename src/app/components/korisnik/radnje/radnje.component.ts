import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Radnja } from 'src/app/models/radnja';
import { appState } from 'src/app/state/appState';
import { ucitajRadnje } from 'src/app/state/radnje/radnje.action';
import { radnjeSelector } from 'src/app/state/radnje/radnje.selector';

@Component({
  selector: 'app-radnje',
  templateUrl: './radnje.component.html',
  styleUrls: ['./radnje.component.css']
})
export class RadnjeComponent implements OnInit {

  constructor(private store: Store<appState>) { }

  radnje: Observable<Radnja[]> = of([]);
  ngOnInit(): void {
    this.store.select(radnjeSelector).subscribe(x=>{
      if(x.length == 0) {
        this.store.dispatch(ucitajRadnje())
      }
    }
    )
    
    this.radnje = this.store.select(radnjeSelector)
  }
}
