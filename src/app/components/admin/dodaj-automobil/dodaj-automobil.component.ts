import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { catchError, debounceTime } from 'rxjs';
import { AutomobilService } from 'src/app/services/automobil.service';

@Component({
  selector: 'app-dodaj-automobil',
  templateUrl: './dodaj-automobil.component.html',
  styleUrls: ['./dodaj-automobil.component.css']
})
export class DodajAutomobilComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private domSanitazer: DomSanitizer,
              private automobilService: AutomobilService) { }

  SlikaUrl: SafeUrl | null = null; 

  ngOnInit(): void {
    this.forma.valueChanges.pipe(debounceTime(500)).subscribe(x=>{
      if(x.slika != null)
        this.SlikaUrl = this.domSanitazer.bypassSecurityTrustResourceUrl(x.slika)
    })
  }

  forma = this.formBuilder.group({
    marka:["",Validators.required],
    model:["",Validators.required],
    godina:["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    cena:["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    specifikacije:["",Validators.required],
    slika:["",Validators.required]
  })

  dodajVozilo(){
    if(this.forma.valid) {
      let podaci = {
        marka: this.forma.value.marka, 
        model: this.forma.value.model,
        godina: this.forma.value.godina, 
        specifikacije: this.forma.value.specifikacije,
        cena: this.forma.value.cena,
        slike:[{url:this.forma.value.slika}]  
      }
      this.automobilService.dodaj(podaci).pipe(catchError(_=>"g")).subscribe(x=>{
        if(x=='g') {
          alert("Vec postoji autmobil s tom registracijom")
          return
        }
        alert("Uspesno je dodat automobil.")
        this.reset();
      })
    }
  }
  reset(){
    this.forma.reset()
    this.SlikaUrl = null;
  }
}
