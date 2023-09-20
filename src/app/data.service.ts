import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private REST_API_SERVER:any;
  private apiUrl = '/api';// Relative URL 
    
  constructor(private httpClient: HttpClient) {
   // this.REST_API_SERVER=environment.apiUrl;
    
    //this.REST_API_SERVER=process.env['ENDPOINT_URL'];
   }

  public sendGetRequest(){
    
   // return this.httpClient.get(`${this.REST_API_SERVER}/course`);
   return this.httpClient.get(this.apiUrl+'/course');
  }

  public sendPutRequest(data:any){
    
   //const url = this.REST_API_SERVER+'?id='+ data.id + '&name='+data.name+'&faculty='+data.faculty+'&duration='+data.duration;
    //return this.httpClient.post(`${this.REST_API_SERVER}/course`,data);
    return this.httpClient.get(this.apiUrl+'/course',data);
  }

  public dbInitialize(){
    //return this.httpClient.get(`${this.REST_API_SERVER}/initialize`);
    return this.httpClient.get(this.apiUrl+'/initialize');
  }

  public findByName(data:any){
    
    //const url = this.REST_API_SERVER+'?id='+ data.id + '&name='+data.name+'&faculty='+data.faculty+'&duration='+data.duration;
     //return this.httpClient.get(`${this.REST_API_SERVER}/findByName/`+data.name);
     return this.httpClient.get(this.apiUrl+'/findByName/'+data.name);
   }
}
