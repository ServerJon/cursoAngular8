/**
 * Importamos todos los modulos/librerías que necesitemos de angular o cualquier plugin que instalemos
 */
import { Component, OnInit } from '@angular/core';

import { InfogithubService } from '../../services/infogithub.service';

import { Info } from '../../interfaces/info';
/**
 * Metadatos para que Angular sepa que esta clase se trata de un componente
 * 
 * 'selector': es el nombre que Angular le dá a la etiqueta html de este componente. Quiere decir que si en otro archivo html colocamos una etiqueta con este nombre se 
 * mostrará la información de este componente.
 * 
 * 'templateUrl': ruta de la plantilla donde se cargará el html del componente. Recordar que también se puede color el código html aquí mismo con la etiqueta 'template' : TODO EL CÓDGIO
 * 
 * 'styleUrls': Al igual que en 'templateUrl' aquí también podremos cargar archivo de estilo o crearlo aquí mismo con 'style': TOTO EL CÓDIGO
 * 
 * 'providers': Este elemento solo lo cargaremos si vamos a importar directamente cualquier service o class al este componente 
 */
@Component({
  selector: 'app-infogithub',
  templateUrl: './infogithub.component.html',
  styleUrls: ['./infogithub.component.css'],
  providers: [InfogithubService]
})
export class InfogithubComponent implements OnInit {
  //Variables
  user: Info;

  constructor(private infogithubService: InfogithubService) { }

  /**
   * Primera función que se carga después de inicializar el componente por lo que todo el código que se cree dentro del mismo se cargará de inicio
   */
  ngOnInit() {

    this.infogithubService.loadInfo().subscribe(
      (response: Info) => {
        console.log("data: ",response);

        this.user = response;
      },
      (error) => {
        
      }
    );
  }

}
