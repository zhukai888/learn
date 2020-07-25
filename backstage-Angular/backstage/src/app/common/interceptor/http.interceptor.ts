import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable({
  providedIn: 'root'
})
export class LoadInterceptor implements HttpInterceptor {
  constructor(private message: NzMessageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // let authReq: any;
    // // 实现第一次不拦截的方式：1. 指定接口不拦截  2. 判断本地localStorage
    // let loginUrl = this.api.baseurl + this.api.urlList['login']['path'];

    // if (req.url !== loginUrl) {
    //     if (localStorage.getItem('access_token')) {
    //         // console.log(2);
    //         const token = localStorage.getItem('access_token');
    //         authReq = req.clone({ setHeaders: { token } });
    //         return next.handle(authReq);
    //     } else {
    //         // 未登录  ==  access_token
    //         this.router.navigate(['/login']);
    //     }
    // }
    // authReq = req.clone({ setHeaders: {} });
    // return next.handle(authReq);



    const vm = this;
    return next.handle(req)
      .pipe(
        tap(
          event => {
            this.message.info('This is a normal message');
            console.log('loading111111111111111111111111111111');
          },
          error => {
            console.log('error2222222222222222');
          }
        ),
        finalize(() => {
          console.log('end loading33333333333333333333');
        })
      );

  }

}
