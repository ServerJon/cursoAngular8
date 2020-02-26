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
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { ModificarMarcadorComponent } from './pages/modificar-marcador/modificar-marcador.component';
import { NuevoMarcadorComponent } from './pages/nuevo-marcador/nuevo-marcador.component';
import { NuevoModificarMarcadorComponent } from './pages/nuevo-modificar-marcador/nuevo-modificar-marcador.component';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    CategoriasComponent,
    InfogithubComponent,
    PagenotfoundComponent,
    PalabrasComponent,
    MarcadorComponent,
    ModificarMarcadorComponent,
    NuevoMarcadorComponent,
    NuevoModificarMarcadorComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    HttpClientModule,
    /** Debemos importar la clase de las rutas aquí */
    AppRoutingModule
  ],
  /** Cargamos todos los servicios que queramos a utilizar en toda la app y que no tengan el 'provideIn: "root"' */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
