import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTodoComponent } from './pages/layout-todo/layout-todo.component';
import { AllTodosComponent } from './pages/all-todos/all-todos.component';
import { CompletedTodosComponent } from './pages/completed-todos/completed-todos.component';
import { PendingTodosComponent } from './pages/pending-todos/pending-todos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutTodoComponent,
    children: [
      {
        path: 'all',
        component: AllTodosComponent
      },
      {
        path: 'completed',
        component: CompletedTodosComponent
      },
      {
        path: 'pending',
        component: PendingTodosComponent
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'todo'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
