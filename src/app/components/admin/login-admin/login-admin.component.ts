import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/appState';
import { loginAdmin, validirajAdmina } from 'src/app/state/korisnik/korisnik.action';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private store : Store<appState>,private router:Router) { }

  loginForm = this.formBuilder.group({
    email:[""],
    lozinka:[""]
  })

  login(){
    let email = this.loginForm.value.email!;
    let lozinka = this.loginForm.value.lozinka!;
    this.store.dispatch(loginAdmin({email: email, lozinka:lozinka}));
    let i = 0;
    this.store.select('korisnikState').subscribe(x=>{
      if(x.korisnik != null) this.router.navigateByUrl("/admin")
    })
  }
  ngOnInit(): void {
  }
}
