import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Response } from 'src/app/model/Response';

let urlBase="http://localhost:8083/Cliente";
@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {

  constructor(private http:HttpClient) { }

  traerTodos():Observable<Response>{
    return this.http.get<Response>(urlBase+"/all");
  }
  crearCliente(data:any):Observable<Response>{
    return this.http.post<Response>(urlBase+"/crear",data);
  }
  eliminar(data:number):Observable<Response>{
    console.log("###### ",data);

    return this.http.get<Response>(urlBase+"/Eliminate/"+data);
  }

}
