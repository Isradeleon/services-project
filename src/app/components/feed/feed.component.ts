import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Post } from '../../classes/Post';
import { User } from '../../classes/User';
import { NgForm } from '@angular/forms';

import { trigger, transition, animate, style, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  /*animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]*/
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class FeedComponent implements OnInit {
  dataReady: boolean = false;
  errorPosting: boolean = false;
  sendingData: boolean = false;

  // data to post
  title: string;
  body: string;

  next: number = 0;

  staggeringPosts: Post[] = [];

  // properties
  @Input() posts: Post[];

  constructor(private clientService: ClientService) {
    this.dataReady = false;
  }

  isMyPost(post: Post): boolean{
    return post.userId === Number(localStorage.getItem("userId"));
  }

  doNext() {
    if(this.next < this.posts.length) {
      this.staggeringPosts.push(this.posts[this.next++]);
    }
  }

  removeMe(i) {
    const postToDelete: Post = this.posts[i];

    this.posts.splice(i, 1);
    this.staggeringPosts.splice(i, 1);

    this.clientService.deleteData("posts/"+postToDelete.id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  ngOnInit() {

    if(this.posts){
      this.dataReady = true;
      this.doNext();
    }else{
      this.dataReady = false;

      this.clientService.getJSONData("posts?_expand=user").subscribe(res=>{
        this.posts = res;
        this.dataReady = true;

        this.doNext();

      });
    }
  
  }

  toggleLike(post: Post){
    post.iLikeIt = !post.iLikeIt;
  }

  onSubmit(f: NgForm){

    if(this.title && this.title.trim() !== '' && this.body && this.body !== ''){

      const myself: User = JSON.parse(localStorage.getItem("userJSON"));

      this.errorPosting = false;

      this.sendingData = true;

      this.clientService.postJSONData("posts",{
        title: this.title, body: this.body, userId: myself.id, user: myself
      }).subscribe(res => {
        this.title = '';
        this.body = '';

        this.sendingData = false;

        this.posts.unshift(res);

        this.staggeringPosts.unshift(res);

      });

    }else{
      this.errorPosting = true;
    }

  }

}
