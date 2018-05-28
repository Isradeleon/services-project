import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClientService } from '../../client.service';

import { from } from 'rxjs';
import { first } from 'rxjs/operators';

import { Post } from '../../classes/Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  post: Post;

  constructor(private route: ActivatedRoute, private clientService: ClientService) {  }

  async ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    await this.clientService.currentPost.subscribe(async val => {
      if(val.lenght == 0){
        await this.clientService.getJSONData("posts");
      }
        
      from(val).pipe(first((x: Post) => x.id == this.id)).subscribe(res => {this.post = res});
    });

  }

}
