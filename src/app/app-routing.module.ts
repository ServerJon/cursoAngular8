import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { InfogithubComponent } from './pages/infogithub/infogithub.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { NuevoMarcadorComponent } from './pages/nuevo-marcador/nuevo-marcador.component';
import { NuevoModificarMarcadorComponent } from './pages/nuevo-modificar-marcador/nuevo-modificar-marcador.component';
import { ComponentePrincipalComponent } from "./pages/componente-principal/componente-principal.component";
import { ComponenteUnoComponent } from "./pages/componente-principal/componente-uno/componente-uno.component";
import { ComponenteDosComponent } from "./pages/componente-principal/componente-dos/componente-dos.component";

import { AuthGuardService } from './services/auth-guard.service';
/**
 * Objeto con todas las rutas que vamos a crear para nuestra aplicación
 */
const    routes:   Routes =  [
  {path: 'info', component: InfogithubComponent},
  /**
   * Para 'proteger' nuestras rutas y que solo los usuarios con permisos puedan acceder a ellas se utiliza la etiqueta 'canActivate'. El service
   * que le importemos deberá tener implementado el 'CanActivate'
   */
  {path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuardService]},
  {path: 'marcador', component: MarcadorComponent},
  {path: 'nuevo-marcador', component: NuevoMarcadorComponent},
  {path: 'nuevo-modificar-marcador', component: NuevoModificarMarcadorComponent}, 
  /**
   * Ruta para acceder al submódulo que se ha creado => ruta absoluta + nombre del archivo + # + nombre de la clase
   * 
   * De esta forma Angular detectará el módulo y las posibles rutas que tenga en él
   */
  {path: 'sub-modulo', loadChildren: "./pages/sub-module/sub-module.module#SubModuleModule"},
  /**
   * Rutas anidadas. El componente 'principal' deberá de tener la etiqueta <router-outlet> en su html para que Angular muestre esas dos 
   * sub vistas 'uno' y 'dos'. Para identificar las sub rutas será a través de la etiqueta 'children' en la ruta principal y las sub rutas 
   * serán como las rutas normales arriba creadas
   */
  {path: 'principal', component: ComponentePrincipalComponent, children: [
    {path: 'uno', component: ComponenteUnoComponent},
    {path: 'dos', component: ComponenteDosComponent},
  ]},

  {path: 'modulo-login', loadChildren: "./pages/logins/logins.module#LoginsModule"},

  // Ruta por defecto donde redirigirá a la que hayamos colocado, importante no olvidar '/' en el nombre de la ruta y 'pathMatch: "full"'
  {path: '', redirectTo: '/info', pathMatch: 'full'},
  // Ruta de página no encontrada
  {path: '**', component: PagenotfoundComponent}
];

/**
 * Metadatos para la clase de Routing, de esta manera estamos exportando la clase de RouterModule para poder usar las rutas y en el import introducimos 
 * en nuestra app todas las rutas que hemos creado. Al ser un metadata de NgModule debemos tratarlo como una librería del modulo y cargar esta clase
 * en los imports del modulo principal.
 */
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
