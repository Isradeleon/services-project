import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../classes/User';
import { Todo } from '../../classes/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  dataReady: boolean = false;

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
    /*this.clientService.getJSONData("todos?userId="+this.userTodos.id).subscribe(res => {
      this.todos = res;
      this.dataReady = true;
    });*/
  }

}
