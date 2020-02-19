/**
 * Componente principal, la idea de este componente es servir de base para colocar en el html la etiqueta de los
 * demás componentes o la etiqueta del router-outlet para el enrutamiento
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoAngular8';
  show_data: boolean;

  /** No es normal tener que colocar el constructor en el app.component, pues no es necesario tener que importar ningún
   * modulo aquí ya que este componente tiene como misión principal usar la etiqueta router-outlet en el html
   */
  constructor() {
    this.show_data = false;
  }

  showData(){
    if(this.show_data){
      this.show_data = false;
    }else{
      this.show_data = true;
    }
  }
}
