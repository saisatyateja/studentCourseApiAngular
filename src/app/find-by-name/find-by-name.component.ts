import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-find-by-name',
  templateUrl: './find-by-name.component.html',
  styleUrls: ['./find-by-name.component.css']
})
export class FindByNameComponent {
  formData: any = {};
  showDiv = false; 
  public apiData:any[]=[];
  constructor(private dataService: DataService) { }
  onSubmit() {
    
    const params = {
      name:this.formData.name,  
    }
    this.dataService.findByName(params).subscribe(
      (data:any) => {
        this.apiData=data;
        console.log(data);
        this.showDiv = true; 
        // Handle the response from the server here if needed
      })
}
}
