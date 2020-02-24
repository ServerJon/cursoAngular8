import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { InfogithubComponent } from './pages/infogithub/infogithub.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

/**
 * Objeto con todas las rutas que vamos a crear para nuestra aplicación
 */
const    routes:   Routes =  [
  {path: 'info', component: InfogithubComponent},
  {path: 'categorias', component: CategoriasComponent},

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
