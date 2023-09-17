import { Component, OnInit } from '@angular/core';
import { faPiggyBank, faThumbsUp, faWallet, faShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pocetna-detalji',
  templateUrl: './pocetna-detalji.component.html',
  styleUrls: ['./pocetna-detalji.component.css']
})
export class PocetnaDetaljiComponent implements OnInit {
  
  iconPiggy = faPiggyBank;
  iconLike = faThumbsUp;
  iconWallet = faWallet;
  iconShield = faShield;
  constructor() { }

  ngOnInit(): void {
  }

}
