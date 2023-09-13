import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './components/korisnik/pocetna/pocetna.component';
import { LoginComponent } from './components/korisnik/login/login.component';
import { RegistracijaComponent } from './components/korisnik/registracija/registracija.component';
import { RadnjeComponent } from './components/korisnik/radnje/radnje.component';
import { ProfilComponent } from './components/korisnik/profil/profil.component';
import { PocetnaAdminComponent } from './components/admin/pocetna-admin/pocetna-admin.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AutomobiliComponent } from './components/admin/automobili/automobili.component';
import { DodajAutomobilComponent } from './components/admin/dodaj-automobil/dodaj-automobil.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  {
    path:"",
    component: PocetnaComponent,
    children:[
      {path:"Login", component: LoginComponent},
      {path:"Registracija", component: RegistracijaComponent},
      {path:"Radnje", component: RadnjeComponent},
      {path:"Profil", component: ProfilComponent}
    ]
  },
  {
    path:"admin",
    component: PocetnaAdminComponent,
    children:[
      {path:"Login", component: LoginAdminComponent},
      {path:"Autmonbili", component: AutomobiliComponent, canActivate:[AuthenticationGuard]},
      {path:"DodajAutomobil", component: DodajAutomobilComponent, canActivate:[AuthenticationGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
