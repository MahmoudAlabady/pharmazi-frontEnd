import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPharmaziService {
  url='http://localhost:3000/api/pharmazi/'
  constructor(private http:HttpClient) { }

  uploadfile(data:any){
    return this.http.post(this.url+'uploadfile',data);
  }

 
}
