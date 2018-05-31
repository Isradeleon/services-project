import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../client.service';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Post } from '../../classes/Post';
import { User } from '../../classes/User';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  dataReady: boolean = false;

  // properties
  @Input() posts: Post[];

  constructor(private clientService: ClientService) {
    this.dataReady = false;
  }

  ngOnInit() {

    if(this.posts){
      this.dataReady = true;
    }else{
      //var query = (this.userFeed ? 
        //"posts?userId="+this.userFeed.id+"&_expand=user" : 
        //"posts?_expand=user");

      this.dataReady = false;
      this.clientService.getJSONData("posts?_expand=user").subscribe(res=>{
        this.posts = res;
        this.dataReady = true;
      });
    }

  
  }

}
