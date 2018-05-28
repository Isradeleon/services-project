import { Component, OnInit } from '@angular/core';
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
  // api strings
  apiPosts: string = "posts";
  apiUsers: string = "users";

  // properties
  posts: Post[];
  users: User[];

  constructor(private clientService: ClientService) { }

  async ngOnInit() {
    this.posts = await this.clientService.getJSONData(this.apiPosts);
    this.users = await this.clientService.getJSONData(this.apiUsers);

    const usersO = from(this.users);
    const postsO = from(this.posts);

    postsO.subscribe((p: Post) => {
      usersO.pipe(filter(u => u.id === p.userId)).subscribe(res => p.user = res)
    });

    this.clientService.changeCurrentPost(this.posts);
  }

}
