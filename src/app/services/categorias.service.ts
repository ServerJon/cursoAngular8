import { Injectable } from '@angular/core';

/**
 * Con este metadata estamos diciendo que esta clase-servicio se cargará en el módulo raíz al crear la aplicación webs por lo que no necesitamos importarla en ningún
 * "providers"
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }
}
