import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutomobiliComponent } from './components/automobili/automobili.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutomobilCardComponent } from './components/automobil-card/automobil-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AutomobilDialogComponent } from './components/automobil-dialog/automobil-dialog.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { automobiliReducer } from './store/automobili.reducer';
import { AutomobiliService } from './services/automobili.service';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AutomobiliEffect } from './store/automobili.effects';
import { AutomobilOpisComponent } from './components/automobil-opis/automobil-opis.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomobiliComponent,
    PocetnaComponent,
    AutomobilCardComponent,
    AutomobilDialogComponent,
    AutomobilOpisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,MatCardModule, FontAwesomeModule,MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot({automobili: automobiliReducer}),
    StoreDevtoolsModule.instrument({maxAge:25, logOnly: environment.production}),
    EffectsModule.forRoot([AutomobiliEffect])
  ],
  providers: [AutomobiliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
