import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Automobil } from 'src/app/models/automobil';
import { Radnja } from 'src/app/models/radnja';
import { AutomobilService } from 'src/app/services/automobil.service';
import { RadnjaService } from 'src/app/services/radnja.service';

@Component({
  selector: 'app-prikazi-automobile',
  templateUrl: './prikazi-automobile.component.html',
  styleUrls: ['./prikazi-automobile.component.css']
})
export class PrikaziAutomobileComponent implements OnInit {

  @Input() radnja : null | Radnja = null;
  automobili: Automobil[] = [];

  constructor(private radnjaService: RadnjaService, private automobilService: AutomobilService) { }

  ngOnInit(): void {
    if(this.radnja == null){
      this.automobilService.preuzmiSveAutomobile().subscribe(x=>{
        this.automobili = x;
      })
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['radnja'] && this.radnja) {
      this.radnjaService.preuzimiAutomobile(this.radnja?.id).subscribe(x=>{
        this.automobili = x;
      })
    }
  }

}
