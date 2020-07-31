import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  public restServer;
  public http;


  constructor(Http: HttpClient, private message: NzMessageService) {
    this.http = Http;
    this.restServer = environment.SERVER_URL;
  }

  public get(url, params?: object): Observable<any> {
    const vm = this;
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key] === 0 || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return vm.http.get(vm.restServer + url, { params: httpParams });
      // .subscribe(data => {
      //   console.log('get请求结束', data);
      //   cb(data);
      // }, (err) => {
      //   this.message.error(this.status[err.status]);
      // });
  }



  public post(url, data?: object, options?: object): Observable<any>  {
    return this.http.post(this.restServer + url, data, options);
  }



  public put(url, data?: object, options?: object): Observable<any> {
    return this.http.put(this.restServer + url, data, options);
  }



  public delete(url, params?: object, cb?: Function): Observable<any> {
    let httpParams = new HttpParams();
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key] === 0 || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    return vm.http.delete(vm.restServer + url, { params: httpParams });
      // .subscribe(data => {
      //   console.log('delete请求结束', data);
      //   cb(data);
      // }, (err) => {
      //   // this.message.error(this.status[err.status]);
      // });
  }
}
