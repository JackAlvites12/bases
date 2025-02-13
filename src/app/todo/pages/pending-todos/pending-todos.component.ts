import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todo-pending-todos',
  templateUrl: './pending-todos.component.html',
  styles: ``
})
export class PendingTodosComponent {

  constructor(

    private todoService: TodoService,

  ){  } 

  get pendingTodos(): Todo[] {
    return [...this.todoService.tareas.filter( todo => !todo.done ) ]
  }

}
