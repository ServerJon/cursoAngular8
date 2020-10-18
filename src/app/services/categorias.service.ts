import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Con este metadata estamos diciendo que esta clase-servicio se cargará en el módulo raíz al crear la aplicación webs por lo que no necesitamos importarla en ningún
 * "providers"
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  //Ruta de nuestro archivo JSON
  private configUrl = 'assets/json/data.json';

  constructor(private httpClient: HttpClient) { }

  /**
   * Función para 'hacer petición' al archivo Json y recuperar la información
   */
  getData() {
    return this.httpClient.get(this.configUrl);
  }
}
