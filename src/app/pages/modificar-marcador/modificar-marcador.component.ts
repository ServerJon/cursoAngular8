import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modificar-marcador',
  templateUrl: './modificar-marcador.component.html',
  styleUrls: ['./modificar-marcador.component.css']
})
export class ModificarMarcadorComponent implements OnInit {

  /**
   * Importante, tanto la variable @input o la variable  @output deben de tener el mismo nombre que en archivo marcador.component.html para que Angular las parsee bien. 
   * @Input recibe el valor de una variable del componente Padre y @Output envia un valor a través de un evento
   */
  @Input() marcadorHijo: number;
  // El evento puede ser del tipo que nosotros queramos, en este caso es de tipo number
  @Output() actualizar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  suma(){
    this.marcadorHijo++;
  }

  resta(){
    this.marcadorHijo--;
  }

  /**
   * Importante, la forma de ejecutar ese evento de la variable actualizar es a través de la función .emit() y pasandole el valor que queremos enviar al componente Padre
   */
  actualiza(){
    this.actualizar.emit(this.marcadorHijo);
  }

}
