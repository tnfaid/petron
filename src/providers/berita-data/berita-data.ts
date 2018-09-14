import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the BeritaDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeritaDataProvider {
  data: any;

  constructor(public http: Http) {  }

  load(): any {
  	if (this.data) {
  		return Observable.of(this.data);
  	} else {
  		return this.http.get('http://127.0.0.1/rest-ci-old/index.php/News').map(this.processData, this);
  	}
  }

  processData(data: any) {
  	this.data = data.json();
  	this.data.tracks = [];

  	this.data.schedule.forEach((PostDate: any) => {
  		PostDate.kategori.forEach((session : any ) => {
  			session.kategoris = [];
  			if ( session.kategorisID){
  				session.kategorisID.forEach(( CategoryID: any) => {
  					let kategori = this.data.kategoris.find((s: any)=> s.name === CategoryID);
	  				if ( kategori ) {
	  					session.kategoris.push(kategori);
	  					kategori.sessions = kategori.session || [];
	  					kategori.sessions.push(session);
	  				}
  				});
  			}

  			if (session.tracks){
  				session.tracks.forEach((track: any) => {
  					if (this.data.tracks.indexOf(track) < 0) {
  						this.data.tracks.push(track);
  					}
  				});
  			}
  		});
  	});

  	return this.data;
  }

  // getTimeline(dayIndex: number, queryText = '', ecludeTracks: any[] = [], segment = 'all'){
  // 	return this.load().map((data: any) => {
  	
  // 	})
  // }


}


