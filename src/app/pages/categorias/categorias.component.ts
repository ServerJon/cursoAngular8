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
      (correct: any) => {

        this.categorias = correct.data;
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
