/**
 * Importamos todos los modulos/librerías que necesitemos de angular o cualquier plugin que instalemos
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Info } from '../interfaces/info';

/**
 * Sin esta etiqueta de metadatos angular no sabe que esta clase se trata de un servicio. Pero hay que recordar que si no ponemos el atributo "providedIn: 'root'" debemos importar
 * la clase en la etiqueta 'providers' de un componente o del modulo
 */
@Injectable()
export class InfogithubService {

  /**
   * Las variables internas que se usan dentro de la clase, ya sean servicios o componentes, se colocan de forma habitual.
   */
  private url: string;

  /**
   * Las clases que importamos de algún modulo de angular o plugin deben inicializarse de esta manera, así es como angular 
   * entiende que se trata de una variable de una clase.
   * @param httpClient modulo de peticiones http
   */
  constructor(private httpClient: HttpClient) { 
    this.url = "https://api.github.com/users/ServerJon";
  }

  /**
   * Petición simple para recuperar los datos de un servidor. Ahora (clase lunes 2 marzo) se le ha añadido el tipo de objeto 
   * con el que queremos trabajar. De esta manera haremos más segura la respuesta del servidor.
   */
  loadInfo(): Observable<Info>{

    return this.httpClient.get<Info>(this.url);
  }

  /**
   * Ejemplo de una petición con una versión de Angular < 6.0
   * 
   * return this.http.post('Url donde queremos hacer la peticion', 'body de la petición por ser post convertir a JSON',
          { headers: headers})
          .map((response: Response) => {
              return response.json();
          })
          .catch(this.handlerError);
        }

      handlerError(error: Response){
        return Observable.throw(error.json().error || 'Server Error');
      }

      Los objetos .map, .catch y Observable son clases de rxjs y los debemos importar.
      Con esto recuperamos los datos del servidor, luego debemos tratarlos en el componente correspondiente
   */

  /**
   * Ejemplo petición con versión Angular > 6.0
   * 
   * return this.http.get('Url donde queremos hacer la petición', { headers: headers });
   * 
   *  handleErrors(error: Response) {
        return throwError(error);
      }
   */

  /**
   * Para ambos, la construcción de los headers sería la misma.
   * 
   * let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization',"Bearer "+token); <-- Esta segunda para las peticiones que nos exijan autentificación
   */
}
