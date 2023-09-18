import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Automobil } from 'src/app/models/automobil';
import { SlikaAutomobila } from 'src/app/models/slikaAutomobila';

@Component({
  selector: 'app-automobil',
  templateUrl: './automobil.component.html',
  styleUrls: ['./automobil.component.css']
})
export class AutomobilComponent implements OnInit {

  slika: SlikaAutomobila | undefined;
  @Input() automobil : null | Automobil = null;

  constructor(private domSanitazer: DomSanitizer) { }

  ngOnInit(): void {
    if(this.automobil?.slike)
    this.slika = this.automobil?.slike[0]
  }

  @Output() Emitter: EventEmitter<Automobil> = new EventEmitter()

  emitujVozilo(){
    if(this.automobil)
    this.Emitter.emit(this.automobil)
  }

  Slika():SafeUrl {
    if(this.slika) return this.domSanitazer.bypassSecurityTrustResourceUrl(this.slika.url)
    return ""
  }

}
