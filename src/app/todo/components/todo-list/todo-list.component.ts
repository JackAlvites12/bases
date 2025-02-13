import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styles: ``
})
export class TodoListComponent {

  @Input()
  public todoList: Todo[] = []


}
