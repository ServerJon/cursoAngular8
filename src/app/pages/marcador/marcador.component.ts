import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {
  marcador: number;

  constructor() { 

    this.marcador = 0;
  }

  ngOnInit() {
  }

  /**
   * Función que recoge ese valor enviado a través de un evento y se lo asigna a una variable de su componente
   * @param valueChildComponent Valor del evento
   */
  actualizacion(valueChildComponent){
    this.marcador = valueChildComponent;
  }

}
