import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number 
  todo:Todo

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit( ) {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '',false, new Date());
    if (this.id!=-1){
    this.todoService.retrieveTodo('karolina',this.id).subscribe(
      data => this.todo = data
    )}
  }

  saveTodo(){
    if(this.id===-1) {
        this.todoService.createTodo('karolina', this.todo).subscribe(
        data => {
          console.log(data);
        });
    } else {
        this.todoService.updateTodo('karolina',this.id, this.todo).subscribe(
        data => {
        console.log(data);
        this.router.navigate(['/todos'], {queryParams: {message:'Success 🎉'}});
      })
    }
  
  }

  createTodo(){
    this.todoService.createTodo('karolina', this.todo).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
