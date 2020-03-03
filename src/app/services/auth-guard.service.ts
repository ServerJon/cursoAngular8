import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

/**
 * Servicio creado para comprobar si el usuario que quiere acceder a una ruta tiene permisos para ello
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  /**
   * Se debe de implementar la librería 'CanActivate' con la función 'canActivate'. Esta función se lanza cuando
   * en el app-routing se intenta acceder a una ruta.
   */

  constructor(private router: Router){

  }

  /**
   * En esta función se hará la comporobación, a través de un token o cualquier parametro que podamos guardar, si se 
   * devuelve 'true' entra en la ruta a la que se quiere acceder, pero si devuelve 'false' no accede por lo que si 
   * necesitamos que se redireccione a alguna otra ruta se debe hacer con código.
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.router.navigate(["/info"], {replaceUrl: true});
    return false;
  }
}
