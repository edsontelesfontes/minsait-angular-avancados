import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interface/IEmployee';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environment/environmentAPI';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

   api = environment.api;
  endpoint = "empregados"


  findAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this.api}/${this.endpoint}`).pipe(
      shareReplay()
    );
  }

  createEmployee(employee:IEmployee){
    return this.http.post(`${this.api}/${this.endpoint}`, employee);
  }
 }
