import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LayoutTodoComponent } from './pages/layout-todo/layout-todo.component';
import { InputAddComponent } from './components/input-add/input-add.component';
import { ToggleNameDonePipe } from './pipes/toggleNameDone.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AllTodosComponent } from './pages/all-todos/all-todos.component';
import { PendingTodosComponent } from './pages/pending-todos/pending-todos.component';
import { CompletedTodosComponent } from './pages/completed-todos/completed-todos.component';


@NgModule({
  declarations: [
    TodoCardComponent,
    TodoListComponent,
    LayoutTodoComponent,
    InputAddComponent,
    ToggleNameDonePipe,
    NavbarComponent,
    AllTodosComponent,
    PendingTodosComponent,
    CompletedTodosComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
