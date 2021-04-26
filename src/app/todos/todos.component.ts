import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
  todos: Todo[]
  message: string

  constructor(private todoService: TodoDataService, private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('karolina').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
      )
  }

  deleteTodo(id){
    this.todoService.deleteTodo("karolina", id).subscribe(
      response => {
        console.log(response);
        this.message= 'Deleted';
        this.refreshTodos()
      }
    );
    }
}
