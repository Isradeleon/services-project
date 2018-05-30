import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreventloginService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{
    if(localStorage.getItem("userId")){
      this.router.navigate(["signin"]);
      return false;
    }
    
    return true;
  }
}
