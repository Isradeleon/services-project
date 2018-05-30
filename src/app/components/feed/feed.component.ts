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
  @Input() userFeed: User;

  dataReady: boolean = false;

  // properties
  posts: Post[];
  users: User[];

  constructor(private clientService: ClientService) {
    this.dataReady = false;
  }

  async ngOnInit() {
    //this.clientService.getJSONData(this.userFeed ? "posts?userId="+this.userFeed.id : "posts").subscribe(val => {
    //  this.posts = val;
    //});
    this.posts = await this.clientService.getJSONDataPromise(this.userFeed ? "posts?userId="+this.userFeed.id : "posts");
    this.users = await this.clientService.getJSONDataPromise(this.userFeed ? "users?id="+this.userFeed.id : "users");

    const usersO = from(this.users);
    const postsO = from(this.posts);

    postsO.subscribe((p: Post) => {
      usersO.pipe(filter(u => u.id === p.userId)).subscribe(res => p.user = res)
    });

    this.dataReady = true;
  }

}
