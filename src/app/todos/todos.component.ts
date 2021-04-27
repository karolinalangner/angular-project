import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private todoService: TodoDataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.refreshTodos();
    this.message = this.route.snapshot.queryParamMap.get('message');
  }

  haveTodos() {
    if (this.todos.length != 0){
      return true
    }
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

    handleUpdate(id){
      this.router.navigate(['todos', id])
    }

    addTodo(id){
      this.router.navigate(['todos', -1])
    }
}
