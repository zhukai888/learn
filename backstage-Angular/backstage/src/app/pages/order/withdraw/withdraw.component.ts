import { Component, OnInit } from '@angular/core';
import { HTTPService } from '.././../../common/services/http-service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.less']
})
export class WithdrawComponent implements OnInit {

  list: any = [];
  total = 0;
  page = 1;
  pageNum = 10;
  loading = true;

  form = {
    draw_type: '', // 提现类型
    request_state: '', // 订单状态
    time: [], // 时间段
    drawOpt: [
      {
        label: '收入提现',
        value: 1
      },
      {
        label: '收益提现',
        value: 2
      },
      {
        label: '余额提现',
        value: 3
      },
      {
        label: '质保金提现',
        value: 4
      }
    ], // 提现类型选项
    requestStateOpt: [
      {
        label: '申请中',
        value: 0
      },
      {
        label: '待到账',
        value: 1
      },
      {
        label: '已到账',
        value: 2
      },
      {
        label: '已拒绝',
        value: 3
      }
    ] // 提现状态选项
  };

  modalData = {
    title: '', // 对话框标题
    type: 3, // 类型
    id: '', // 记录id
    requestRemark: '', // 拒绝原因
    userName: '', // 操作员
    erialNumber: '' // 汇款流水号
  }; // 对话框数据


  drawDetail = {
    draw_money: '',
    commission_money: '',
    request_time: '',
    request_state: '',
    deal_staff_name: '',
    deal_time: '',
    request_remark: '',
    serial_number: ''
  };  // 提现详情
  isVisible = false; // 对话框打开Flag


  constructor(private http: HTTPService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getwithdraw();
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
    this.getwithdraw();
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
    this.getwithdraw();
  }

  /**
   * @author: 侠岚
   * @description: 搜索
   * @returns: {void}
   * @Date: 2020-07-28 10:22:16
   */
  search(): void {
    this.page = 1;
    this.getwithdraw();
  }

  /**
   * @author: 朱凯凯（1965581681@qq.com）
   * @description: 查询记录
   * @param: {type}
   * @returns:
   * @Date: 2020-07-29 10:22:16
   */
  getwithdraw(): void {
    this.loading = true;
    const data = {
      draw_type: this.form.draw_type,
      request_state: this.form.request_state,
      start_time: this.form.time
        ? new Date(this.form.time[0]).getTime() / 1000
        : '',
      end_time: this.form.time
        ? new Date(this.form.time[1]).getTime() / 1000
        : '',
      page: this.page - 1,
      page_num: this.pageNum
    };

    this.http.post('/DrawCashOrder/get_draw_cash_order_list', data).subscribe(res => {
      if (res.code === 0) {
        this.list = res.data.list;
        this.total = parseInt(res.data.count, 10);
        this.loading = false;
      }
    }, err => {
      console.error(err);
    });
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

  /**
   * @author: 侠岚
   * @description: 对话框打开
   * @param: {number} type 1:付款，2:拒付，3: 查看详情
   * @param: {number} id 订单id
   * @returns: {void}
   * @Date: 2020-07-29 16:15:01
   */
  modalShow(type, id): void {
    this.modalData.type = type;
    this.modalData.id = id;
    this.modalData.userName = '45445454';
    switch (type) {
      case 1:
        this.modalData.title = '付款';
        this.isVisible = true;
        break;
      case 2:
        this.modalData.title = '拒付';
        this.isVisible = true;
        break;
      case 3:
        this.modalData.title = '查看详情';
        this.getwithObj(id);
        break;
    }
  }

  /**
   * @author: 侠岚
   * @description: 获取订单详情
   * @param: {number} id 订单id
   * @returns: {void}
   * @Date: 2020-07-29 14:36:42
   */
  getwithObj(id): void {
    this.http.post('/DrawCashOrder/get_draw_cash_order_detail', { order_id: id }).subscribe(res => {
      if (res.code === 0) {
        this.drawDetail = res.data;
        this.isVisible = true;
      }
    });
  }


  /**
   * @author: 侠岚
   * @description: 操作：付款/拒付
   * @returns: {void}
   * @Date: 2020-07-29 15:37:41
   */
  sure(): void {
    const that = this;
    if (that.modalData.type === 1 && !that.modalData.erialNumber) {
      that.message.error('请填写汇款流水号');
      return;
    } else if (this.modalData.type === 2 && !that.modalData.requestRemark) {
      that.message.error('请填写拒付原因');
      return;
    }


    const data = {
      id: that.modalData.id,
      request_state: that.modalData.type === 1 ? 2 : 3,
      serial_number: that.modalData.erialNumber,
      // deal_staff_name: this.userName
      deal_staff_name: this.modalData.userName,
      request_remark: that.modalData.requestRemark
    };

    this.http.post('/DrawCashOrder/deal_draw_cash_order', data).subscribe(res => {
      if (res.code === 0) {
        that.list.find(item => {
          if (item.id === that.modalData.id) {
            item.request_state = that.modalData.type === 1 ? '2' : '3';
          }
        });
        that.colseModel();
      } else {
        this.message.error(res.message);
      }
    }, err => {
      console.log(err);
    });
  }

  /**
   * @author: 侠岚
   * @description: 关闭对话框
   * @returns: {void}
   * @Date: 2020-07-29 17:15:26
   */
  colseModel(): void {
    this.isVisible = false;
    this.modalData = {
      title: '',
      type: 3,
      id: '',
      requestRemark: '',
      userName: '',
      erialNumber: ''
    };
  }
}
