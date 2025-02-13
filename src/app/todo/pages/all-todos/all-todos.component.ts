import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'todo-all-todos',
  templateUrl: './all-todos.component.html',
  styles: ``
})
export class AllTodosComponent {

  constructor(

    private todoService: TodoService,

  ){  } 

  get tareas(): Todo[] {
    return [...this.todoService.tareas ]
  }

}
