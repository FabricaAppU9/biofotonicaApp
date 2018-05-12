import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PrimaryRequirementsProvider {

  private baseUrl = '/api/';
 
  private lights: string[];
  private diseases: string[];
  private equipments: string[];

  constructor(private http: Http) { 
    
  }
  getLights(){
      return this.http
                 .get(this.baseUrl+"fonte_tratamento")
                 .toPromise();
  }
   
  getDiseases(lightSelected){
      return this.http
                 .get(this.baseUrl+`doenca_tratamento/${lightSelected}`)
                 .map(res => res.json())
    
  } 

  getEquipments(lightSelected,diseaseSelected){
     
      return this.http
                 .get(this.baseUrl+`equipamento_tratamento/${lightSelected}/${diseaseSelected}`)
                 .map(res => res.json())
    
  }
  
}
