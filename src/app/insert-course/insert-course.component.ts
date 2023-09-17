import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css']
})
export class InsertCourseComponent {
  formData: any = {};
  constructor(private dataService: DataService) { }
  onSubmit() {

    const params = {
      id: this.formData.id,
      name:this.formData.name,
      faculty:this.formData.faculty,
      duration:this.formData.duration,
    }
    this.dataService.sendPutRequest(params).subscribe(
      (response) => {
        console.log(params);
        // Handle the response from the server here if needed
      })
}
}