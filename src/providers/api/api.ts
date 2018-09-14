import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  data: any;

  constructor(public http: HttpClient) {}

  // load(): any {
  // 		return Observable.of(this.data);
  // }

  

  getBerita() {
  	return this.http.get('http://127.0.0.1/rest-ci-old/index.php/News');
  }

}
