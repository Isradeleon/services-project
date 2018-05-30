import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}

  logout(){
    localStorage.removeItem("userId");
    this.router.navigate(["signin"]);
  }

  isLogged(): boolean{
    return localStorage.getItem("userId") != null;
  }

  goToMyProfile(){
    const me = localStorage.getItem("userId");
    /*this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };*/
    
    this.router.navigate(["user",me]);
  }
}
