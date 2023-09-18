import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER:any;
  
  constructor(private httpClient: HttpClient) {
    this.REST_API_SERVER=environment.apiUrl;
   }

  public sendGetRequest(){
    
    return this.httpClient.get(`${this.REST_API_SERVER}/course`);
  }

  public sendPutRequest(data:any){
    
   //const url = this.REST_API_SERVER+'?id='+ data.id + '&name='+data.name+'&faculty='+data.faculty+'&duration='+data.duration;
    return this.httpClient.post(`${this.REST_API_SERVER}/course`,data);
  }

  public dbInitialize(){
    return this.httpClient.get(`${this.REST_API_SERVER}/initialize`);
  }

  public findByName(data:any){
    
    //const url = this.REST_API_SERVER+'?id='+ data.id + '&name='+data.name+'&faculty='+data.faculty+'&duration='+data.duration;
     return this.httpClient.get(`${this.REST_API_SERVER}/findByName/`+data.name);
   }
}
