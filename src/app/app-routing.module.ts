import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoModule )
  },
  {
    path: '**',
    redirectTo: 'todo',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
