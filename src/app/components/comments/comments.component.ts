import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  //post is is used for the API request
  postId: string;

  comments: Comment[];
  commentsCount: number = 0;
  
  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');

    this.comments = await this.clientService.getJSONData('posts/'+this.postId+"/comments");
    this.commentsCount = this.comments.length;
  }

}
