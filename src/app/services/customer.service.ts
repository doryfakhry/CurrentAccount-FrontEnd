import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  baseUrl:string = 'https://localhost:44382/';
 
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl + 'api/User');
  }

  viewUsers(id:string){
    return this.http.get(this.baseUrl + 'api/User/' + id);
  }

  addAccount(accObj:any){
    //console.log("this is from the service");
    //console.log(accObj);
    //console.log(this.baseUrl + 'api/Account');
    return this.http.post(this.baseUrl + 'api/Account',accObj);
  }
  
}
