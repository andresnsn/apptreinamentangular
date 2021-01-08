import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { animationFrameScheduler, Observable } from 'rxjs';
import { LoginComponent } from './login.component';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{

  logged: boolean = false;


  setLogged(logged: boolean) {
    this.logged = logged;
  }



  constructor(private router: Router) { 
    
  }

  
  
  email: string;
  password: string;

  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    
    if (this.logged == false){
      this.router.navigate(['login']);
    }
    
    console.log("Função de proteção chamada.")
    console.log("Valor da variável de proteção é: "+this.logged)

    return true;


  }


}
