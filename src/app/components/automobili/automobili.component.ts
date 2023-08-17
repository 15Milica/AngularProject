import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Automobil } from 'src/app/models/automobil';
import { AutomobiliService } from 'src/app/services/automobili.service';
import { AppState } from 'src/app/store/app-state';
import { selectSviAutomobili } from 'src/app/store/automobili.selectors';
@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutomobiliComponent implements OnInit {
  
  automobili : Observable<readonly Automobil[]> = of([]);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.automobili = this.store.select(selectSviAutomobili);
  }

}
