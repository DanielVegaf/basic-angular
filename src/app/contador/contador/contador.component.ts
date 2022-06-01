import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ miTitulo }}</h1>

        <h2>La base es: {{ base }}</h2>

        <button (click)="acumular( base )">+ {{ base }}</button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)">- 5</button>
    `
})

export class ContadorComponent {
    miTitulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5

    acumular(valor: number) {
        this.numero += valor
    }
}