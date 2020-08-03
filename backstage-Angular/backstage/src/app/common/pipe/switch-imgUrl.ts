/*
 * @Description: 图片转化管道
 * @Author: 侠岚
 * @Date: 2020-07-29 10:22:08
 * @FilePath: \backstage\src\app\common\pipe\switch-imgUrl.ts
 */

import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'switchImgUrl'
})
export class SwitchImgUrl implements PipeTransform {

  transform(value: string): string {
    if (!value.startsWith('https://') && !value.startsWith('http://')) {
      value = environment.IMG_URL + value;
    }
    return value;
  }

}

