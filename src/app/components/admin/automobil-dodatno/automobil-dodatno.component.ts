import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Automobil } from 'src/app/models/automobil';
import { Radnja } from 'src/app/models/radnja';
import { AutomobilService } from 'src/app/services/automobil.service';
import { RadnjaService } from 'src/app/services/radnja.service';
import { appState } from 'src/app/state/appState';
import { ucitajRadnje } from 'src/app/state/radnje/radnje.action';
import { radnjeSelector } from 'src/app/state/radnje/radnje.selector';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-automobil-dodatno',
  templateUrl: './automobil-dodatno.component.html',
  styleUrls: ['./automobil-dodatno.component.css']
})
export class AutomobilDodatnoComponent implements OnInit {

  radnje: Radnja[] = []
  @Input() automobil: Automobil | null = null;
  @Output() Emiter: EventEmitter<null> = new EventEmitter();
  @Output() EmiterObrisi: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store<appState>, private radnjaService: RadnjaService, private automobilService: AutomobilService, private domSanitazer: DomSanitizer) { }

  ngOnInit(): void {
    this.store.select(radnjeSelector).subscribe(x=>{
      if(x.length ==0) this.store.dispatch(ucitajRadnje())
      this.radnje = x;
    })
  }

  nazad() {
    this.Emiter.emit(null)
  }

  obrisiVozilo(){
    if(this.automobil)
      this.automobilService.obrisi(this.automobil.id).subscribe(x=>{
        alert("Uspesno obrisani automobil.")
        if(this.automobil)
          this.EmiterObrisi.emit(this.automobil.id)
      })
  }

  postaviRadnju(radnja: Radnja) {
    if(this.automobil)
    this.radnjaService.postaviAutomobilURadnji(radnja.id,this.automobil.id).subscribe(x=>{
      if(this.automobil)this.automobil.radnja = radnja
    })
  }
  Slika(radnja: Radnja): SafeUrl | string {
    if (radnja && radnja.slika) {
      return this.domSanitazer.bypassSecurityTrustResourceUrl(radnja.slika);
    }
    return "";
  }
  
}
