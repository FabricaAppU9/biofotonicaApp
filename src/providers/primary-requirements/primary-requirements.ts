import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PrimaryRequirementsProvider {

  private baseUrl = '';
 
  private lights: string[];
  private diseases: string[];
  private equipments: string[];

  constructor(private http: Http) { 
    
  }
  getLights(){
    /*
      return this.http
                 .get(this.baseUrl)
                 .map(res => res.json())
    
    */
  }
   
  getDiseases(lightSelected){
     /*
      return this.http
                 .get(this.baseUrl)
                 .map(res => res.json())
    */
  } 

  getEquipments(diseaseSelected){
     /*
      return this.http
                 .get(this.baseUrl)
                 .map(res => res.json())
    */
  }
  
}
