import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todo-completed-todos',
  templateUrl: './completed-todos.component.html',
  styles: ``
})
export class CompletedTodosComponent {

  constructor(

    private todoService: TodoService,

  ){  } 

  get completedTodos(): Todo[] {
    return [...this.todoService.tareas.filter( todo => todo.done ) ]
  }

}
