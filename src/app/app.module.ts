/** Modulo principal
 * 
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { InfogithubComponent } from './pages/infogithub/infogithub.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PalabrasComponent } from './pages/palabras/palabras.component';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    CategoriasComponent,
    InfogithubComponent,
    PagenotfoundComponent,
    PalabrasComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    HttpClientModule,
    /** Debemos importar la clase de las rutas aquí */
    AppRoutingModule
  ],
  /** Cargamos todos los servicios que vayamos a utilizar */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
