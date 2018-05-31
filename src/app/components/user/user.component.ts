import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/User';
import { ClientService } from '../../client.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user: User;
  userData: boolean = false;

  errorData: boolean;

  showing: number = 1;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userData = false;
      this.errorData = false;

      this.clientService
      .getJSONData("users?id="+this.id+"&_embed=posts&_embed=albums&_embed=todos")
      .subscribe(
        res => {
          this.user = res[0];
          
          if(this.user)
            from(this.user.posts).pipe(map(val => val.user = this.user))
            .subscribe(ending => this.userData = true);
          else
            this.errorData = true;
          
        }, err => {
          this.errorData = true;
        }
      );

    });

  }

  setShowing(showing: number){
    this.showing = showing;
  }

}
