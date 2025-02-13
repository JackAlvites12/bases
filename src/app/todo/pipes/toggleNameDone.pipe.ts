import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'toggleNameDone'
})
export class ToggleNameDonePipe implements PipeTransform{
    transform( done: boolean ) {
        return done ? 'Completado' : 'Pendiente'
    }
}