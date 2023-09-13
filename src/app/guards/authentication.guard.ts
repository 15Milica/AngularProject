import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable,debounceTime } from 'rxjs';
import { appState } from '../state/appState';
import { korisnikSelektor } from '../state/korisnik/korisnik.selector';
import { TipKorisnika } from '../state/korisnik/korisnikState';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private store : Store<appState>, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(korisnikSelektor).pipe(debounceTime(200),map(x=>{

      if(x.korisnik && x.tip == TipKorisnika.ADMIN) {
          if(state.url !="/admin") return this.router.createUrlTree(["/admin"])
          else return true;
      }
      if(x.korisnik && x.tip == TipKorisnika.KORISNIK) return this.router.createUrlTree(["/"])
      return this.router.createUrlTree(["/admin/Login"])
    }))
  }
}