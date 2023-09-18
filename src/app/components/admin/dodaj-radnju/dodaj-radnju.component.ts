import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { catchError, debounceTime } from 'rxjs';
import { RadnjaService } from 'src/app/services/radnja.service';

@Component({
  selector: 'app-dodaj-radnju',
  templateUrl: './dodaj-radnju.component.html',
  styleUrls: ['./dodaj-radnju.component.css']
})
export class DodajRadnjuComponent implements OnInit {

   constructor(private formBuilder: FormBuilder, 
              private domSanitazer: DomSanitizer,
              private radnjaService: RadnjaService) { }

  SlikaUrl: SafeUrl | null = null; 

  ngOnInit(): void {
    this.forma.valueChanges.pipe(debounceTime(500)).subscribe(x=>{
      if(x.slika != null)
        this.SlikaUrl = this.domSanitazer.bypassSecurityTrustResourceUrl(x.slika)
    })
  }

  forma = this.formBuilder.group({
    naziv:["",Validators.required],
    adresa:["",Validators.required],
    telefon:["",[Validators.required,Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
    slika:["",Validators.required]
  })

  dodajRadnju(){
    if(this.forma.valid) {
      let podaci = {
        naziv: this.forma.value.naziv, 
        adresa: this.forma.value.adresa,
        telefon: this.forma.value.telefon,
        slika: this.forma.value.slika  
      }
      this.radnjaService.dodaj(podaci).pipe(catchError(_=>"g")).subscribe(x=>{
        if(x=='g') {
          alert("Greska")
          return
        }
        alert("Uspesno je dodata radnja.")
        this.reset();
      })
    }
  }
  reset(){
    this.forma.reset()
    this.SlikaUrl = null;
  }
}
