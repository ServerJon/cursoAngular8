import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { InfogithubComponent } from './pages/infogithub/infogithub.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    InfogithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
