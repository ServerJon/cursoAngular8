import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InfogithubService {

  //Variables
  private url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "https://api.github.com/users/ServerJon";
  }

  loadInfo(){

    return this.httpClient.get(this.url);
  }
}
