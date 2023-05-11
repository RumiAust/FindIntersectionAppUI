import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindIntersectService {
  
  constructor(private http: HttpClient) { }


  getResult(listOne:string, listTwo:string,hashSetType:string):Observable<any>{
    let params = new HttpParams()
    .set('param1', listOne)
    .set('param2', listTwo)
    .set('param3', hashSetType);
   const url = 'http://localhost:8080/api/v1/findIntersection';  
   return this.http.get<any>(url, { params: params });
   }

}
