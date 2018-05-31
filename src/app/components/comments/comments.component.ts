import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: string;

  dataReady: boolean = true;

  @Input() comments: Comment[];
  commentsCount: number = 0;
  
  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.postId = this.route.snapshot.paramMap.get('id');

    this.clientService.getJSONData('posts/'+this.postId+"/comments").subscribe(val => {
      this.comments = val;
      this.commentsCount = this.comments.length;
      this.dataReady = true;
    });*/
  }

}
