import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindIntersectService {
  
  constructor(private http: HttpClient) { }


  getResult(listOne:string, listTwo:string,hashSetType:string):Observable<any>{
    console.log(listOne+'  ----  '+listTwo+"  ---  "+hashSetType);
    const url = `http://localhost:8080/data?listOne=${listOne}&listTwo=${listTwo}&setListToHash=${hashSetType}`;
    return this.http.get<any>(url);
   }

}
