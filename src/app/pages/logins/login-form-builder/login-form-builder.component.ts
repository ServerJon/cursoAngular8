import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-builder',
  templateUrl: './login-form-builder.component.html',
  styleUrls: ['./login-form-builder.component.css']
})
export class LoginFormBuilderComponent implements OnInit {

  /**
   * FormBuilder es otra manera de crear un formulario reactivo como el objeto FormGroup
   */
  reactiveForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Data form: ",this.reactiveForm);
  }

}
