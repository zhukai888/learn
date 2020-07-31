/*
 * @Description: 订单结算--结算状态管道
 * @Author: 侠岚
 * @Date: 2020-07-28 14:41:46
 * @FilePath: \backstage\src\app\common\pipe\reward-order-state.ts
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rewardorderState'
})
export class RewardorderStatePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case '0':
        return '未到账（预收益）';
      case '1':
        return '已到账';
      case '2':
        return '已取消';
    }
  }

}
