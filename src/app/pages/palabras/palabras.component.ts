import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  /**
   * Creamos nuestra variable en el componente hijo que debe de llamarse IGUAL que la propiedad / atributo que hayamos nombrado en el componente padre
   */
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
