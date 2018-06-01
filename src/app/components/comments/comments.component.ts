import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { User } from '../../classes/User';
import { Comment } from '../../classes/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId: string;

  // data to post
  name: string;
  body: string;

  dataReady: boolean = true;

  sendingData: boolean = false;

  errorPosting: boolean = false;

  @Input() comments: Comment[];
  commentsCount: number = 0;
  
  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  removeMe(i) {
    const commentToDelete: Comment = this.comments[i];

    this.comments.splice(i, 1);

    this.clientService.deleteData("comments/"+commentToDelete.id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  isMyComment(comment: Comment){
    const myself: User = JSON.parse(localStorage.getItem("userJSON"));
    return comment.email === myself.email;
  }

  onSubmit(f: NgForm){

    if(this.name && this.name.trim() !== '' && this.body && this.body !== ''){

      const myself: User = JSON.parse(localStorage.getItem("userJSON"));

      this.errorPosting = false;

      this.sendingData = true;

      this.clientService.postJSONData("posts/"+this.postId+"/comments",{
        name: this.name, body: this.body, email: myself.email
      }).subscribe(res => {
        this.name = '';
        this.body = '';

        this.sendingData = false;

        this.comments.unshift(res);

      });

    }else{
      this.errorPosting = true;
    }

  }

}
