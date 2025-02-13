import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styles: ``
})
export class TodoCardComponent {

  @Input()
  public todo!: Todo

  constructor(
      private todoService: TodoService
  ){  }

  toggleDone( todoId: string ): void{
    this.todoService.toggleDone( todoId)
  }

  deleteTodo( todoId: string ):void {
    this.todoService.deleteTodo( todoId )
  }


}
