import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class taskService{
  constructor(public http : Http) {
  }
  fetchData() 
   	{
   		return this.http.get('../assets/employee.json')
   		.map(response => response.json());
   	}
	
}