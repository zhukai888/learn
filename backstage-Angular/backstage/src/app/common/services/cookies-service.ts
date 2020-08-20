import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  cookieKey = 'loginCookie';

  constructor(private cookieService: CookieService) { }


  // 设置cookie
  setCookie(cookie, expires = 1): void {
    this.cookieService.set(this.cookieKey, cookie, expires);
  };

  // 获取cookie
  getCookie(): string {
    return this.cookieService.get(this.cookieKey);
  };

  // 移除cookie
  removeCookie(): void {
    this.cookieService.delete(this.cookieKey);
  };

}
