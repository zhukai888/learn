import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize, catchError, mergeMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable({
  providedIn: 'root'
})
export class LoadInterceptor implements HttpInterceptor {
  constructor(private message: NzMessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 定义一个事时间变量, 输出日志
    const startTime = Date.now();

    const clonedRequest = req.clone({
      // headers: req.headers.set('Authorization', 'token')
    });



    return next.handle(clonedRequest).pipe(
      mergeMap((ev) => {
        if (ev instanceof HttpResponseBase) {
          return this.handleData(ev, req, next);
        }
        return of(ev); // 若一切都正常，则后续操作
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err, req, next)),
      finalize(() => {
        // 打印日志
        const elapsedTime = Date.now() - startTime;
        const message = req.method + ' ' + req.urlWithParams + ' ' + status
          + ' in ' + elapsedTime + 'ms';
        console.log(message);
      })
    );

  }

  private handleData(ev: HttpResponseBase, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    switch (ev.status) {
      case 200:
        break;
      case 201:
        break;
      case 204:
        break;
      case 400:
        this.message.error('参数错误,状态码: ' + ev.status);
        break;
      case 401:
        this.message.error('用户认证失败,状态码: ' + ev.status);
        break;
      case 403:
        this.message.error('用户没有权限,请重新登录! 状态码: ' + ev.status);
        break;
      case 404:
        this.message.error('未找到资源,状态码: ' + ev.status);
        break;
      case 405:
        this.message.error('方法不允许,状态码: ' + ev.status);
        break;
      case 500:
        this.message.error('服务器出错,状态码: ' + ev.status);
        break;
      default:
        this.message.error('请求失败,状态码: ' + ev.status);
        break;
    }
    return of(ev);
  }

}
