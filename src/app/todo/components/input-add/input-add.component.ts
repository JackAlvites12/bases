import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-input-add',
  templateUrl: './input-add.component.html',
  styles: ``
})
export class InputAddComponent {

  public todoForm = new FormGroup({
    description: new FormControl<string>('')
  })

  constructor(
      private todoService: TodoService
  ){}

  // Tratamos todo nuestro formulario como un tipo Todo
  get currentDescription(): Todo {
    const description = this.todoForm.value as Todo
    return description 
  }

  addTodo(): void{
    this.todoService.addTodo( this.currentDescription.description )
    this.todoForm.reset()
  }




}
