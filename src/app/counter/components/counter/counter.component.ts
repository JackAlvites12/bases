import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})      

export class CounterComponent {

    public contador: number = 0 


    incrementCounter( value: number ): void {

        this.contador += value

    }

    decrementCounter( value: number ): void | null {

        if( this.contador === 0 ) return null

        this.contador -= value 

    }

    resetCounter(){
        this.contador = 0
    }

}