import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SubComponentComponent } from './sub-component.component';
import { SubComponentDosComponent } from './sub-component-dos/sub-component-dos.component';

@NgModule({
  declarations: [SubComponentComponent, SubComponentDosComponent],
  imports: [
    CommonModule,
    /**
     * Rutas creadas para este submódulo. Importante mencionar que cuando creamos las rutas en el propio módulo
     * utilizaremos la función .forChild() y cuando las creamos en otro archivo como el app-routing será con .forRoot()
     */
    RouterModule.forChild([
      {path: "uno", component: SubComponentComponent},
      {path: "dos", component: SubComponentDosComponent}
    ])
  ]
})
export class SubModuleModule { }
