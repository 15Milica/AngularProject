import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Radnja } from 'src/app/models/radnja';

@Component({
  selector: 'app-radnja',
  templateUrl: './radnja.component.html',
  styleUrls: ['./radnja.component.css']
})
export class RadnjaComponent implements OnInit {
  
  @Input() radnja : null | Radnja = null;
  @Output() Emitter: EventEmitter<Radnja> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  emitujRadnju(){
    if(this.radnja)
    this.Emitter.emit(this.radnja)
  }
}
