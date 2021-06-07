import { Component } from '@angular/core';
import { from } from 'rxjs';

import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ApiCallAng';
  Details?:any;



 

  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
     
      this.Details=data;
    console.log(data);

    })
  }
}
