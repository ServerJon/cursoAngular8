import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-nuevo-modificar-marcador',
  templateUrl: './nuevo-modificar-marcador.component.html',
  styleUrls: ['./nuevo-modificar-marcador.component.css']
})
export class NuevoModificarMarcadorComponent implements OnInit {

  marcador: number;

  constructor(private sharedDataService: SharedDataService) { 
    this.marcador = 0;
  }

  ngOnInit() {
  }

  sumar(){
    this.marcador++;
  }

  restar(){
    this.marcador--;
  }

  actualizar(){
    /**
     * Importamos el Service y llamamos a la función para enviarle el nuevo valor de la variable
     */
    this.sharedDataService.changeMarcador(this.marcador);
  }

}
