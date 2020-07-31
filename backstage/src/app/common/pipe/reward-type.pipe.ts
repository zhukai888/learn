/*
 * @Description: 订单结算--业务类型管道
 * @Author: 侠岚
 * @Date: 2020-07-28 14:29:57
 * @FilePath: \backstage\src\app\common\pipe\reward-type.pipe.ts
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rewardType'
})
export class RewardTypePipe implements PipeTransform {

  transform(rewardType: string): string {
    switch (rewardType) {
      case '1':
        return '销售商品';
      case '2':
        return '销售课程';
      case '3':
        return '商品返佣';
      case '4':
        return '课程返佣';
    }
  }

}

