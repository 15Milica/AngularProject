import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Automobil } from 'src/app/models/automobil';
import { AutomobilService } from 'src/app/services/automobil.service';
import { appState } from 'src/app/state/appState';
import AutomobilSelector from 'src/app/state/automobili/automobil.selector';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css']
})
export class AutomobiliComponent implements OnInit {
  
  automobili: Automobil[] = []
  izabraniAutomobil: Automobil | null = null;
  
  constructor(private autmobilService: AutomobilService) { }

  ngOnInit(): void {
    this.autmobilService.preuzmiSveAutomobile().subscribe(x=>{
      this.automobili = x;
    })
  }

  postaviAutomobil(automobil: Automobil | null) {
    this.izabraniAutomobil = automobil;
  }

  deleteHandler(id: number) {
    let noviAutomobili = this.automobili.filter(a=>a.id != id);
    this.automobili = [...noviAutomobili]
    this.izabraniAutomobil = null;
  }
}
