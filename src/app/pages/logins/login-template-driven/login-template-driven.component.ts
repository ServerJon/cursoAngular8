import { Component, OnInit } from '@angular/core';

import { User } from '../../../classes/user';

@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.css']
})
export class LoginTemplateDrivenComponent implements OnInit {

  /**
   * Creamos una variable del tipo que nosotros queramos, en este caso es una clase que recogerá las dos variables del html
   */
  user: User;

  constructor() { 
    this.user = new User();
  }

  ngOnInit() {
  }

  /**
   * Función que se lanza al realizar el evento ngSubmit.
   */
  onSubmit(){
    console.log("My user's data: ",this.user);
  }

}
