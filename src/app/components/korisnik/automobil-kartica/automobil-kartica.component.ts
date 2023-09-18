import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Automobil } from 'src/app/models/automobil';
import { Radnja } from 'src/app/models/radnja';
import { AutomobilService } from 'src/app/services/automobil.service';
import { IznajmljivanjeService } from 'src/app/services/iznajmljivanje.service';
import { appState } from 'src/app/state/appState';
import { odabranoAutomobilSelector } from 'src/app/state/automobili/automobil.selector';
import { TipKorisnika } from 'src/app/state/korisnik/korisnikState';

@Component({
  selector: 'app-automobil-kartica',
  templateUrl: './automobil-kartica.component.html',
  styleUrls: ['./automobil-kartica.component.css']
})
export class AutomobilKarticaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<appState>,private domSanitizer:DomSanitizer, private automobilService: AutomobilService, private iznajmljivanjeService: IznajmljivanjeService) { }

  @Input() automobil : null | Automobil = null;

  brojLajkova: number = 0;
  imaKorisnika: boolean = false;
  likeId:number = 0;
  iznajmi: boolean = false;
  korisnikId: number = -1;

  iznajmiForm = this.formBuilder.group({
    dani: [null, [Validators.required, Validators.min(1)]],
    datum: [null, Validators.required]
  });
  
  get dani() { return this.iznajmiForm.get("dani") }
  get datum() { return this.iznajmiForm.get("datum") }


  ngOnInit(): void {
    if(this.automobil){
      this.automobilService.automobilLajkovi(this.automobil?.id).subscribe(x=>{
        this.brojLajkova = x;
      })
      this.store.select("korisnikState").subscribe(x=>{
        if(x.korisnik != null && x.tip == TipKorisnika.KORISNIK){
          this.imaKorisnika = true;
          this.korisnikId  = x.korisnik.id;
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
  iznajmiAutomobil(){
    this.iznajmi = true;
  }
  goBack(){
    this.iznajmi = false;
  }
  submitForm(){
    if(this.iznajmiForm.valid){
      if(this.automobil && this.iznajmiForm.value.datum && this.iznajmiForm.value.dani)
        this.iznajmljivanjeService.dodajIznajmljivanje(this.automobil?.id, this.korisnikId, this.iznajmiForm.value.datum, this.iznajmiForm.value.dani).subscribe((x)=>{
          if(x) {
          alert("Uspešno ste iznajmli auotmobil!")
          this.iznajmi = false;
          }
        },
        (error) => {
          console.error('Automobil je iznajmljen', error);
        })
    }
  }
}
