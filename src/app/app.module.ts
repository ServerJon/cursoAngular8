/** Modulo principal
 * 
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { ComponentePrincipalComponent } from './pages/componente-principal/componente-principal.component';
import { ComponenteUnoComponent } from './pages/componente-principal/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './pages/componente-principal/componente-dos/componente-dos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    NuevoModificarMarcadorComponent,
    ComponentePrincipalComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    HttpClientModule,
    /** Debemos importar la clase de las rutas aquí */
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  /** Cargamos todos los servicios que queramos a utilizar en toda la app y que no tengan el 'provideIn: "root"' */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
