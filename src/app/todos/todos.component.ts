import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Clean the house', false, new Date())
  ]
  constructor() { }

  ngOnInit() {
  }

}
