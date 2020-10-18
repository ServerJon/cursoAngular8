/**
 * Componente principal, la idea de este componente es servir de base para colocar en el html la etiqueta de los
 * demás componentes o la etiqueta del router-outlet para el enrutamiento
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoAngular8';
  show_data: boolean;
  options: any;

  /** No es normal tener que colocar el constructor en el app.component, pues no es necesario tener que importar ningún
   * modulo aquí ya que este componente tiene como misión principal usar la etiqueta router-outlet en el html pero a veces colocamos algún
   * menú de navegación y si que necesitamos introducir datos
   */
  constructor(private router: Router) {
    this.show_data = false;

    /**
     * Recordad que este Array es tan solo la forma que tengo yo de mostrar mi "menú de navegación" 
     */
    this.options = [
      {"name": "Info","url": "/info"},
      {"name": "Categorias","url": "/categorias"},
      {"name": "Marcador","url": "/marcador"},
      {"name": "Nuevo Marcador","url": "/nuevo-marcador"},
      {"name": "Nuevo Modificar Marcador","url": "/nuevo-modificar-marcador"},
      {"name": "Nuevo Sub Módulo", "url": "/sub-modulo"},
      {"name": "Sub rutas", "url": "/principal"},
      {"name": "Logins", "url": "/modulo-login"},
      {"name": "Material Design", "url": "/material"}
    ]
  }

  showData(){
    if(this.show_data){
      this.show_data = false;
    }else{
      this.show_data = true;
    }
  }

  /**
   * Función para llamar al objeto Router de Angular y realizar una navegación entre componentes. Cuando se trata tan solo de hacer esta lógica 
   * es más sencillo utilizar tan solamente la propiedad 'routerLink' en la etiqueta del html. Usaremos la lógica del evento (click) y llamar a una 
   * función cuando necesitemos introducir alguna lógica extra, como comprobar una variable o un objeto antes de ir a una url u otra
   * @param url Url para hacer la navegación
   */
  goTo(url:string){
    this.router.navigate([url]);
  }
}
