/*
 * @Description: 结算管理--申请状态管道
 * @Author: 侠岚
 * @Date: 2020-07-28 14:41:46
 * @FilePath: \backstage\src\app\common\pipe\request-state.ts
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestState'
})
export class RequestState implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '0':
        return '申请中';
      case '1':
        return '待到账';
      case '2':
        return '已到账';
      case '3':
        return '已拒绝';
    }
  }
}
