import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Radnja } from 'src/app/models/radnja';
import { RadnjaService } from 'src/app/services/radnja.service';
import { appState } from 'src/app/state/appState';
import { ucitajRadnje } from 'src/app/state/radnje/radnje.action';
import { radnjeSelector } from 'src/app/state/radnje/radnje.selector';

@Component({
  selector: 'app-radnje',
  templateUrl: './radnje.component.html',
  styleUrls: ['./radnje.component.css']
})
export class RadnjeComponent implements OnInit {

  constructor(private store: Store<appState>, private radnjaService: RadnjaService) { }

  radnje: Observable<Radnja[]> = of([]);
  r:Radnja[] = []
  izabranaRadnja: Radnja | null = null;

  ngOnInit(): void {
    this.store.select(radnjeSelector).subscribe(x=>{
      if(x.length == 0) {
        this.store.dispatch(ucitajRadnje())
      }
    }
    )
    this.radnjaService.preuzmiRadnje().subscribe(x=>{
      this.r = x
    })
    
    this.radnje = this.store.select(radnjeSelector)
  }
  postaviRadnju(radnja:Radnja){
    this.izabranaRadnja = radnja
  }
}
