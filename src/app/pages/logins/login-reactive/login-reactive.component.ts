import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {

  /**
   * Objeto FormGroup para crear la estructura de variables para el formulario. Cada variable será de la clase FormControl
   * 
   * La validación se hace desde aquí, es un array de validaciones. El colocar por ejemplo required en el input en el html es solo 
   * para CSS, pues las clases como .ng-valid[required] se crean con el html.
   */
  reactiveForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(4)])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("User's data: ",this.reactiveForm);
  }

}
