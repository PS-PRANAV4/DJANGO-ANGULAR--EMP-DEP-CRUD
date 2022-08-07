import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  

  constructor(private http:HttpClient) {}

    getDepList():Observable<any[]>
    {
      return this.http.get<any[]>(this.APIUrl + '/dep/department/');
    }
    addDepList(val:any)
    {
      return this.http.post<any[]>(this.APIUrl + '/dep/department/',val);
    }
    updateDepList(val:any)
    {
      return this.http.put<any[]>(this.APIUrl + '/dep/department/',val);
    }
    deleteDepList(val:any)
    {
      return this.http.delete<any[]>(this.APIUrl + '/dep/department/'+val);

    }
    
    getEmplist():Observable<any[]>
    {
      return this.http.get<any[]>(this.APIUrl + '/dep/emp/');
    }
    addEmpList(val:any)
    {
      return this.http.post<any[]>(this.APIUrl + '/dep/emp/',val);
    }
    updateEmpList(val:any)
    {
      return this.http.put<any[]>(this.APIUrl + '/dep/emp/',val);
    }
    deleteEmpList(val:any)
    {
      return this.http.delete<any[]>(this.APIUrl + '/dep/emp/'+val);
      
    }
    getAllDepartmentNames():Observable<any[]>
    {
      return this.http.get<any[]>(this.APIUrl+'/dep/department/');
    }
  
  
  
  
  }







   
   