import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../common/services/http-service';


@Component({
  selector: 'app-invit',
  templateUrl: './invit.html',
  styleUrls: ['./invit.less']
})
export class InvitComponent implements OnInit {

  list: []; // 邀请记录列表
  userId = ''; // uid
  total: number; // 列表总条数
  page = 1; // 页码
  pageNum = 10; // 每页显示的条数
  userName = ''; // 用户名
  loading = true;

  constructor(private http: HTTPService) { }

  ngOnInit(): void {
    this.getRecordList();
  }


  /**
   * @author: 侠岚
   * @description: 获取记录
   * @returns: {void}
   * @Date: 2020-07-28 10:12:43
   */
  getRecordList(): void {
    const data = {
      user_id: this.userId,
      user_name: this.userName,
      page: this.page - 1,
      pagenum: this.pageNum
    };
    this.http.post('/Invitation/bs_inviter_list', data).subscribe(res => {
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
    this.getRecordList();
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
    this.getRecordList();
  }

  /**
   * @author: 侠岚
   * @description: 搜索
   * @returns:{void}
   * @Date: 2020-07-28 10:12:43
   */
  search(): void {
    this.page = 1;
    this.userId = '';
    this.getRecordList();
  }

  /**
   * @author: 朱凯凯（1965581681@qq.com）
   * @description: 查看别人的邀请记录
   * @param: {Number} userId
   * @returns:
   * @Date: 2020-07-29 19:21:02
   */
  replace(userId): void {
    // this.$router.replace({ path: "/", query: { uid } });
    this.userId = userId;
    this.page = 1;
    this.userName = '';
    this.getRecordList();
  }

}
