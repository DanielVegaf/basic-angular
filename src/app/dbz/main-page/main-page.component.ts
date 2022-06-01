import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1000400
    },
    {
      nombre: 'Vegeta',
      poder: 1000200
    }
  ]

  nuevo: Personaje = {
    nombre: 'Anacleto',
    poder: 4
  }

  agregarNuevoPersonaje( argunmento: Personaje ){
    this.personajes.push( argunmento )
  }

}
