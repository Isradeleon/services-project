import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClientService } from '../../client.service';

import { from } from 'rxjs';
import { first } from 'rxjs/operators';

import { Post } from '../../classes/Post'
import { User } from '../../classes/User';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  post: Post;
  user: User;
  dataReady: boolean;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { 
    this.dataReady = false;
  }

  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.post = await this.clientService.getJSONDataPromise('posts/'+this.id);
    this.user = (await this.clientService.getJSONDataPromise('users?id='+this.post.userId))[0];

    this.dataReady = true;
  }

}
