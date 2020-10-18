import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit, OnChanges {

  /**
   * Creamos nuestra variable en el componente hijo que debe de llamarse IGUAL que la propiedad / atributo que hayamos nombrado en el componente padre
   */
  @Input() name: string;
  @Input() sub_categoria: string;

  constructor() { }

  /**
   * Esta función se ejecuta cada vez que el componente sufre algún cambio en sus variables y cuando iniciamos el componente que también se ejecuta.
   * El uso principal de esta función es saber que se está modificando en mi componente en tiempo real.
   * @param changes Objeto simpleChanges con los valores que se han modificado
   */
  ngOnChanges(changes: SimpleChanges){
    console.log("changes: ",changes);
  }

  ngOnInit() {
  }

}
