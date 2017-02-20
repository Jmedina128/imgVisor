import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Albumprovider {

  constructor(private http: Http) {}

  load(){

      return this.http.get('/data/albumes.json').map(
        (res) => res.json()
        );
        
}

}
