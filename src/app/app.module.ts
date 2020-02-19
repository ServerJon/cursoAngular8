/** Modulo principal
 * 
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { InfogithubComponent } from './pages/infogithub/infogithub.component';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    CategoriasComponent,
    InfogithubComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  /** Cargamos todos los servicios que vayamos a utilizar */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
