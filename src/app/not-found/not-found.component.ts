import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() titleMsg;
  @Input() bodyMsg;
  
  constructor() { }

  ngOnInit() {
    if(!this.titleMsg)
      this.titleMsg = "Error trying to find page!";

    if(!this.bodyMsg)
      this.bodyMsg = "It is possible that this page doesn't exist in this website";
  }

}