import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Deku','Bakugo','All Might','Gran Torino'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}