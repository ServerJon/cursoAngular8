import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: any;
  sub_categoria: string;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    /**
     * Cargamos los datos del Json
     */
    this.categoriasService.getData().subscribe(
      (correct) => {
        /** Este codigo se realiza para que Angular reconozca que los datos son en JSON. En un caso real, el 
         * servidor nos devuelve los datos con el un content-type: JSON por lo que ya sabe de que se trata. En este caso
         * debemos nosotros interpretar esos datos.
         * 
         * el código real sería tan solo: var _json = respuestaCorrecta.json() o si ya hemos hecho esta transformación en el service
         * ya podríamos trabajar con el json sin problema
         */
        
        let _json = JSON.stringify(correct);

        this.categorias = JSON.parse(_json).data; 
      },
      (error) => {
        console.log("Error getData() | categoriasService | CategoriasComponent ",error);
      }
    )
  }

  changeName(value: string){
    this.sub_categoria = value + "!!!!"
  }

}
