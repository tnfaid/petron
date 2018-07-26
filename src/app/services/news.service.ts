import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from "@angular/http";

@Injectable()
export class NewsService{
	private BASE_URL: string = 'http://localhost/rest-ci-old/index.php/News';

	constructor(
		private http: Http
	){}

	findAll(): Observable<any> {
		return this.http.get(this.BASE_URL + 'find_all')
				.map((res: Response) => {
					return res.json();
				})
				.catch((error: Error) => {
					return Observable.throw(new Error(error.message));
				});
	}
}