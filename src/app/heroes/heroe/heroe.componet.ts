import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombreHeroe: string = 'Iron Man';
    edadHeroe: number = 45;

    get heroeCapitalizado(): string{
        return this.nombreHeroe.toUpperCase();
    }

    obtenerInfo(): string {
        return `${ this.nombreHeroe } - ${ this.edadHeroe }`;
    }

    cambiarNombre(): void{
        this.nombreHeroe = 'Spider man';
    }

    cambiarEdad():void {
        this.edadHeroe = 34
    }
}