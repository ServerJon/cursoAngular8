import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginTemplateDrivenComponent } from './login-template-driven/login-template-driven.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { LoginFormBuilderComponent } from './login-form-builder/login-form-builder.component';

@NgModule({
  declarations: [LoginTemplateDrivenComponent, LoginReactiveComponent, MenuComponent, LoginFormBuilderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MenuComponent, children: [
        { path: 'template', component: LoginTemplateDrivenComponent},
        { path: 'reactive', component: LoginReactiveComponent},
        { path: 'builder', component: LoginFormBuilderComponent}
      ]}
   ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginsModule { }
