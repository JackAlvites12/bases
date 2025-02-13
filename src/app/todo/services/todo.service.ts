import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo.interface";
import { v4 as uuid } from "uuid";


@Injectable({
    providedIn: 'root'
})
export class TodoService {

    public tareas: Todo[] = [
        {
            id: uuid(),
            description: 'Pasear al perro',
            done: false,
        },
        {
            id: uuid(),
            description: 'Hacer tareas de Uni',
            done: false,
        },
        {
            id: uuid(),
            description: 'Ir a casa de valeria',
            done: true,
        },
    ]

    constructor(

    ){ 
        this.readLocalStorage()
    }

    addTodo( description: string ): void{
        
        if( !description ) return 

        this.tareas.push({
            id: uuid(),
            description,
            done: false,
        })

        localStorage.setItem('todos', JSON.stringify( this.tareas ))

    }

    toggleDone( todoId: string ){

        this.tareas = this.tareas.map( todo => {
            
            if( todoId === todo.id ){
                todo.done = !todo.done
            }

            return todo
        })

        localStorage.setItem('todos', JSON.stringify( this.tareas ))

    }

    deleteTodo( todoId: string ): void{
        this.tareas = this.tareas.filter( todo => todo.id !== todoId )
        this.saveLocalStorage()
    }

    // LocalStorage 
    saveLocalStorage(): void {
        localStorage.setItem('todos', JSON.stringify( this.tareas ))
    }

    readLocalStorage(): void {

        const storage = JSON.parse( localStorage.getItem('todos') as string )
        if( !storage ) return 

        this.tareas = storage

    }

}