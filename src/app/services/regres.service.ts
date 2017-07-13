import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';

@Injectable()
export class RegresService {

  private api_base: string = 'https://reqres.in/api';

  constructor(private http: Http) { }

  register(user: User): Observable<any> {
    let api = this.api_base + '/register';
    return this.http.post(api, user)
              .map(this.verify)
              .catch((error: any) => {
                if (error.status === 400) {
                    return Observable.throw(JSON.parse(error._body));
                } else {
                  Observable.throw({});
                }
            });
  }

  login(user: User): Observable<any> {
    let api = this.api_base + '/login';
    return this.http.post(api, user)
              .map(this.verify)
              .catch((error: any) => {
                if (error.status === 400) {
                    return Observable.throw(JSON.parse(error._body));
                } else {
                  Observable.throw({});
                }
            });
  }

  verify(res: Response) {
    let response = res.json();
    if(response.body) return response.body
    else return response
  }

}
