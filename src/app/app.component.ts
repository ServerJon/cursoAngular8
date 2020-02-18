import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoAngular8';
  show_data: boolean;

  constructor() {
    this.show_data = false;
  }

  showData(){
    if(this.show_data){
      this.show_data = false;
    }else{
      this.show_data = true;
    }
  }
}
