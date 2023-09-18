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

  constructor(private radnjaService: RadnjaService) { }

  radnje: Radnja[] = [];
  izabranaRadnja: Radnja | null = null;

  ngOnInit(): void {
    this.radnjaService.preuzmiRadnje().subscribe(x=>{
      this.radnje = x
    })
  }
  postaviRadnju(radnja:Radnja){
    this.izabranaRadnja = radnja
  }
}
