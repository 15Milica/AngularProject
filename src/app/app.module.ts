import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appState } from './state/appState';
import { KorisnikEffects } from './state/korisnik/korisnik.effect';
import { RadnjeEffects } from './state/radnje/radnje.effect';
import { IznajmljivanjaEffects } from './state/iznajmljivanje/iznajmljivanje.effect';
import { AutomobilEffects } from './state/automobili/automobil.effect';
import korisnikReducer from './state/korisnik/korisnik.reducer';
import radnjeReducer from './state/radnje/radnje.reducer';
import automobilReducer from './state/automobili/automobil.reducer';
import iznajmljivanjeReducer from './state/iznajmljivanje/iznajmljivanje.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RadnjeComponent } from './components/korisnik/radnje/radnje.component';
import { ProfilComponent } from './components/korisnik/profil/profil.component';
import { RegistracijaComponent } from './components/korisnik/registracija/registracija.component';
import { LoginComponent } from './components/korisnik/login/login.component';
import { PocetnaComponent } from './components/korisnik/pocetna/pocetna.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { PocetnaAdminComponent } from './components/admin/pocetna-admin/pocetna-admin.component';
import { DodajAutomobilComponent } from './components/admin/dodaj-automobil/dodaj-automobil.component';
import { AutomobiliComponent } from './components/admin/automobili/automobili.component';
import { PocetnaDetaljiComponent } from './components/korisnik/pocetna-detalji/pocetna-detalji.component';
import { AutomobilComponent } from './components/admin/automobil/automobil.component';
import { AutomobilDodatnoComponent } from './components/admin/automobil-dodatno/automobil-dodatno.component';
import { MatSelectModule } from '@angular/material/select';
import { DodajRadnjuComponent } from './components/admin/dodaj-radnju/dodaj-radnju.component';
import { AutomobilKarticaComponent } from './components/korisnik/automobil-kartica/automobil-kartica.component';
import { PrikaziAutomobileComponent } from './components/korisnik/prikazi-automobile/prikazi-automobile.component';
import { RadnjaComponent } from './components/korisnik/radnja/radnja.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    LoginComponent,
    RegistracijaComponent,
    ProfilComponent,
    RadnjeComponent,
    LoginAdminComponent,
    PocetnaAdminComponent,
    DodajAutomobilComponent, 
    AutomobiliComponent, PocetnaDetaljiComponent, AutomobilComponent, AutomobilDodatnoComponent, DodajRadnjuComponent, AutomobilKarticaComponent, PrikaziAutomobileComponent, RadnjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,MatCardModule, FontAwesomeModule,MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot<appState>({korisnikState: korisnikReducer, radnjeState: radnjeReducer, automobiliState: automobilReducer,iznajmljivanjeState: iznajmljivanjeReducer}),
    EffectsModule.forRoot([KorisnikEffects,RadnjeEffects,AutomobilEffects,IznajmljivanjaEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
