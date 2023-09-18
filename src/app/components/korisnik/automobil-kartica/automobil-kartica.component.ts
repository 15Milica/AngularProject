import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Automobil } from 'src/app/models/automobil';
import { Radnja } from 'src/app/models/radnja';
import { AutomobilService } from 'src/app/services/automobil.service';
import { appState } from 'src/app/state/appState';
import { odabranoAutomobilSelector } from 'src/app/state/automobili/automobil.selector';
import { TipKorisnika } from 'src/app/state/korisnik/korisnikState';

@Component({
  selector: 'app-automobil-kartica',
  templateUrl: './automobil-kartica.component.html',
  styleUrls: ['./automobil-kartica.component.css']
})
export class AutomobilKarticaComponent implements OnInit {

  constructor(private store: Store<appState>,private domSanitizer:DomSanitizer, private automobilService: AutomobilService) { }

  @Input() automobil : null | Automobil = null;

  brojLajkova: number = 0;
  imaKorisnika: boolean = false;
  likeId:number = 0;

  ngOnInit(): void {
    if(this.automobil){
      this.automobilService.automobilLajkovi(this.automobil?.id).subscribe(x=>{
        this.brojLajkova = x;
      })
      this.store.select("korisnikState").subscribe(x=>{
        if(x.korisnik != null && x.tip == TipKorisnika.KORISNIK){
          this.imaKorisnika = true;
          if(this.automobil?.likes)
          this.automobilService.preuzmiLike(x.korisnik.id, this.automobil?.id).subscribe(y=>{
            this.likeId = y;
          })
        }
      })
    }
  
  }

  lajkuj() {
    this.store.select('korisnikState').subscribe(x=>{
      if(x.korisnik!= null && x.tip == TipKorisnika.KORISNIK && this.automobil != undefined && this.likeId == -1)
        {
          this.automobilService.lajkuj(this.automobil?.id, x.korisnik?.id).subscribe(x=>{
            this.brojLajkova+=1
            this.likeId = x;
          })
        }
    })
  }

  dislike(){
    if(this.likeId != -1)this.automobilService.dislike(this.likeId).subscribe(x=>{
      this.brojLajkova-=1;
      this.likeId = -1;
    })
  }
  sanitizeUlr(url:string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
