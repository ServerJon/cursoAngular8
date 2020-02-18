import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: []
})
export class CategoriasComponent implements OnInit {
  numero: number;

  constructor() { 
    this.numero = 10  }

  ngOnInit() {
  }

}
