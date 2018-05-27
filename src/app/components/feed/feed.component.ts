import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

import { Post } from '../../classes/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  // api strings
  apiFeed: string = "posts";

  // properties
  posts: Post[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getJSONData(this.apiFeed).subscribe((data: Post[]) => this.posts = data);
  }

}
