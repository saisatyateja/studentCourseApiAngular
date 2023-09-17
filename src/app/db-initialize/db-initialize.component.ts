import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-db-initialize',
  templateUrl: './db-initialize.component.html',
  styleUrls: ['./db-initialize.component.css']
})
export class DBInitializeComponent {
   constructor(private dataServic: DataService){}
   createDataBase(){
    this.dataServic.dbInitialize().subscribe(
      (response) => {
        console.log(response);
        // Handle the response from the server here if needed
      })
   }
}
