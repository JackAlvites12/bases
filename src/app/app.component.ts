import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  public contador: number = 0

  resetCounter(): void{
    this.contador = 0
  }

  incrementCount( value: number ): void {
      this.contador += value
  }

  decrementCount( value: number ): void | null {

    if( this.contador === 0 ) return null

    this.contador -= value 

  }

}
