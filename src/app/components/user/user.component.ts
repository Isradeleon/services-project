import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/User';
import { ClientService } from '../../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user: User;
  userData: boolean = false;

  showing: number = 1;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.userData = false;

      this.clientService.getJSONData("users?id="+this.id).subscribe(res => {
        this.user = res[0];
        this.userData = true;
      });

    });

  }

  setShowing(showing: number){
    this.showing = showing;
  }

}
