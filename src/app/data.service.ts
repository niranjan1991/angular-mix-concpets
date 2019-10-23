import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, forkJoin } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   private userData = new BehaviorSubject<any>([]);

   sendUser(user){
    this.userData.next(user);
   }

   getuser(){
    return this.userData.asObservable();
   }

   getAllEmpolyee(){

     let url1 = this.http.get('http://dummy.restapiexample.com/api/v1/employees');
     let url2 = this.http.get('https://jsonplaceholder.typicode.com/todos/');

     return forkJoin([url1, url2]) 
   }
  


  


}
