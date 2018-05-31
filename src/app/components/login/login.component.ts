import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../client.service';
import { User } from '../../classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  loginRequest() {
    console.log(this.username);  // { first: '', last: '' }
    console.log(this.password);  // false
  }

  onSubmit(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;
    
    this.clientService.getJSONData("users?username_like="+username).subscribe(res => {
      
      if(res && res.length > 0 && password === '123'){
        const user: User = res[0];
        localStorage.setItem("userId",""+user.id);
        this.router.navigate(['/']);
      }
      
    });

  }

}
