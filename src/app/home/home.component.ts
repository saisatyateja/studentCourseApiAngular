import { Component, OnInit  } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {
  displayedColumns: string[] = ['id', 'name', 'faculty', 'duration'];
  dataSource = new MatTableDataSource<Element>([]);
  showDiv = false; 

  public apiData:any[]=[];
  constructor(private dataService: DataService) { }
  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.apiData = data;
      this.showDiv = true; 
      this.dataSource.data= data;
    })  
  }

}



