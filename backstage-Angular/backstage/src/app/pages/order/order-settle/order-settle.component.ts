import { Component, OnInit } from '@angular/core';
import { HTTPService } from '.././../../common/services/http-service';

@Component({
  selector: 'app-order-settle',
  templateUrl: './order-settle.component.html',
  styleUrls: ['./order-settle.component.less']
})
export class OrderSettleComponent implements OnInit {

  list: [];
  total = 0;
  pageNum = 10;
  page = 1;
  loading = true;
  form = {
    uname: '', // 用户名称
    from_order_number: '', // 订单编号
    reward_type: '', // 业务类型
    reward_order_state: '', // 订单状态
    time: [], // 时间段
    rewardOpt: [
      {
        label: '销售商品',
        value: 1
      },
      {
        label: '销售课程',
        value: 2
      },
      {
        label: '商品返佣',
        value: 3
      },
      {
        label: '课程返佣',
        value: 4
      }
    ], // 业务类型选项
    rewardOrderOpt: [
      {
        label: '未到账（预收益）',
        value: 0
      },
      {
        label: '已到账',
        value: 1
      },
      {
        label: '已取消',
        value: 2
      }
    ] // 订单状态选项
  };

  constructor(private http: HTTPService) {
  }

  ngOnInit(): void {
    this.getOrderList();
  }

  /**
   * @author: 侠岚
   * @description:  获取订单数据
   * @returns: {void}
   * @Date: 2020-07-28 09:32:28
   */
  getOrderList(): void {
    this.loading = true;
    const data = {
      user_name: this.form.uname,
      from_order_number: this.form.from_order_number,
      reward_type: this.form.reward_type,
      reward_order_state: this.form.reward_order_state,
      start_time: this.form.time
        ? new Date(this.form.time[0]).getTime() / 1000
        : '',
      end_time: this.form.time
        ? new Date(this.form.time[1]).getTime() / 1000
        : '',
      page: this.page - 1,
      page_num: this.pageNum
    };
    this.http.post('/StatementInfo/get_statement_info_list', data).subscribe(res => {
      if (res.code === 0) {
        this.list = res.data.list;
        this.total = parseInt(res.data.count, 10);
        this.loading = false;
      }
    });
  }

  /**
   * @author: 侠岚
   * @description: 页码条数改变
   * @param: {Number} pageNum 页码条数
   * @returns: {void}
   * @Date: 2020-07-28 10:12:43
   */
  changePageSize(pageNum): void {
    this.page = 1;
    this.pageNum = pageNum;
    this.getOrderList();
  }

  /**
   * @author: 侠岚
   * @description: 页码改变
   * @param: {Number} page 页码索引
   * @returns: {void}
   * @Date: 2020-07-28 10:12:43
   */
  changePageIndex(page): void {
    this.page = page;
    this.getOrderList();
  }

  /**
   * @author: 侠岚
   * @description: 搜索
   * @returns: {void}
   * @Date: 2020-07-28 10:22:16
   */
  search(): void {
    this.page = 1;
    this.getOrderList();
  }

  /**
   * @author: 侠岚
   * @description: 改变时间
   * @param: {Array} time 时间数组
   * @returns: {void}
   * @Date: 2020-07-28 11:34:37
   */
  changeTime(time): void {
    this.form.time.push(new Date(time[0]).getTime() / 1000);
    this.form.time.push(new Date(time[1]).getTime() / 1000);
  }

}
