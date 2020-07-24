import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {
  private http;

  constructor(http: HttpClient) {
    this.http = http;
  }



  xhttp(method: string, url: string, data: object = {}, withCredentials: boolean = false) {

    let vm = this;

    // const httpParams = new HttpParams();
    // for (const key of Object.keys(data)) {
    //   httpParams.set(key, data[key]);
    // }

    let options = {
      // body?: any
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      // .set('Content-Type', 'application/x-www-form-urlencoded')
      params: new HttpParams({ fromObject: { ...data } }),
      // params: httpParams,
      // observe?: HttpObserve
      // reportProgress?: boolean;  //进度
      responseType: '"arraybuffer" | "blob" | "json" | "text"',
      withCredentials
    };

    this.http.request(method, url, options).subscribe(res => {
      console.log(res)
    })
  }

}
