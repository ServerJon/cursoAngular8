import { Component, OnInit } from '@angular/core';

import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-nuevo-marcador',
  templateUrl: './nuevo-marcador.component.html',
  styleUrls: ['./nuevo-marcador.component.css']
})
export class NuevoMarcadorComponent implements OnInit {

  marcador: number;

  constructor(private sharedDataService: SharedDataService) { 

    this.marcador = 0;
  }

  ngOnInit() {  
    /**
     * Cargamos nuestro Service y nos 'subscribimos' a esa variable intermedia para recoger el valor.
     */
    this.sharedDataService.marcador$.subscribe( (correct) => {
      this.marcador = correct;
    });
  }

}
