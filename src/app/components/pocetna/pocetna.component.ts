import { Component, OnInit } from '@angular/core';
import { faPiggyBank, faThumbsUp, faWallet, faShield } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  
  iconPiggy = faPiggyBank;
  iconLike = faThumbsUp;
  iconWallet = faWallet;
  iconShield = faShield;
  constructor() { }

  ngOnInit(): void {
  }

}
