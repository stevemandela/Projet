import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MeteoProvider {

  apikey= "99dfe35fcb7de1ee";
  url;


  constructor(public http: Http) {
    console.log('Hello MeteoProvider Provider');
    this.url= 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';

  }
  getmeteo(city, state)
  {
    return this.http.get(this.url+'/'+state+'/'+city+'.json').map(res => res.json());
  }

}
