import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomobiliComponent } from './components/automobili/automobili.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';

const routes: Routes = [
  {
    path:"automobili",
    component: AutomobiliComponent
  },
  {
    path:"pocetna",
    component: PocetnaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
