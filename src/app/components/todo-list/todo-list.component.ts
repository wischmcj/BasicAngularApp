import { Component, OnInit } from '@angular/core';
import { TodoListItem } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  things: TodoListItem[] = [
    { id: '1', description: 'First one ' },
    { id: '2', description: 'Second one ' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
