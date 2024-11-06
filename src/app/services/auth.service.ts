import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _httpclient=inject(HttpClient)
  login(data:object):Observable<any>{
    return this._httpclient.post('https://alrmoz.com/marsa_back/public/en/api/Dashboard/AdminLogin',data)
  }
}
