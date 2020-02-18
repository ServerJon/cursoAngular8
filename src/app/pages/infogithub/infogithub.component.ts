import { Component, OnInit } from '@angular/core';
import { InfogithubService } from '../../services/infogithub.service';

@Component({
  selector: 'app-infogithub',
  templateUrl: './infogithub.component.html',
  styleUrls: ['./infogithub.component.css'],
  providers: [InfogithubService]
})
export class InfogithubComponent implements OnInit {
  //Variables
  user: any;

  constructor(private infogithubService: InfogithubService) { }

  ngOnInit() {

    this.infogithubService.loadInfo().subscribe(
      (response) => {
        console.log("data: ",response);

        this.user = response;
      },
      (error) => {
        
      }
    );
  }

}
