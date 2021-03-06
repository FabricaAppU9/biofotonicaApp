import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class GeneratedConfigsProvider {

  

  constructor(private http: Http) {}

  getConfigs(requirements){
  
    return this.http.post("https://lasconf.azurewebsites.net/api/gera_config",requirements).
    map(res => res.json());
    
  } 

}
