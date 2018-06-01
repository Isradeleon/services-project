import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClientService } from '../../services/client.service';

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

  errorData: boolean;

  constructor(private route: ActivatedRoute, private clientService: ClientService) { 
    this.dataReady = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dataReady = false;
      
      this.clientService
      .getJSONData('posts/'+this.id+'?_expand=user&_embed=comments')
      .subscribe(
        res => {
          this.post = res;
          this.dataReady = true;
        },
        err => {
          this.errorData = true;
        }
      );

    });
  }

}
