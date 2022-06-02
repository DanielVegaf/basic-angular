import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1000400
        },
        {
            nombre: 'Vegeta',
            poder: 1000200
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes]
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje )
    }
}