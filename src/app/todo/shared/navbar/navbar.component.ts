import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  public navList = [
    {
      item: 'Todos',
      url: '/todo/all',
    },
    {
      item: 'Completos',
      url: '/todo/completed',
    },
    {
      item: 'Pendientes',
      url: '/todo/pending',
    },
  ]

}
