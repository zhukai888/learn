<!--
 * @Description: 提现管理
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-19 13:59:50
--> 

<template>
  <div class="withdraw">
    <div>
      <el-form ref="form" :model="form" label-width="100px" inline class="searchFrom">
        <el-form-item label="提现类型：">
          <el-select v-model="form.draw_type" placeholder="请选择提现类型" clearable>
            <el-option v-for="item in form.drawOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现状态：">
          <el-select v-model="form.request_state" placeholder="请选择提现状态：" clearable>
            <el-option v-for="item in form.requestStateOpt" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间段：">
          <el-date-picker unlink-panels v-model="form.time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="withdrawList" border style="width:100%">
        <el-table-column prop="id" label="id" align="center" width="80">
        </el-table-column>
        <el-table-column prop="draw_cash_order_number" label="提现单号" align="center">
        </el-table-column>
        <el-table-column prop="uname" label="申请人" align="center">
        </el-table-column>
        <el-table-column label="收款账户" align="center">
          <template slot-scope="scope">
            <p>{{scope.row.user_real_name}}</p>
            <p>{{scope.row.account_number}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="draw_money" label="提现金额" align="center" width="120">
        </el-table-column>

        <el-table-column prop="commission_money" label="手续费" align="center" width="120">
        </el-table-column>

        <el-table-column prop="request_time" label="提现时间" align="center" :formatter="formatterTime" width="200">
        </el-table-column>

        <el-table-column label="提现状态" align="center" width="150">
          <template slot-scope="scope">
            {{scope.row.request_state	 | stateFilter}}
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" width="300">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="dialogShow(1,scope.row.id)" v-show="scope.row.request_state == 0">付款</el-button>
            <el-button size="small" type="primary" @click="dialogShow(2,scope.row.id)" v-show="scope.row.request_state == 0">拒付</el-button>
            <el-button size="small" type="primary" @click="dialogShow(3,scope.row.id)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination background layout="prev, pager, next, sizes" :total="total" :page-size.sync="pageNum" :page-sizes="[10, 20, 50]" :current-page.sync="page"
        @current-change="currentChange" @size-change="sizeChange">
      </el-pagination>
    </div>

    <div>
      <el-dialog :title="dialog.title" :visible.sync="dialogVisible" width="500px" @close="dialogVisible = false" :before-close="handleClose">
        <div v-if="dialog.type!=3">
          <el-form inline label-width="100px">
            <el-form-item label="操作员:">
              <el-input disabled v-model="dialog.userName" size="large"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="汇款流水号:" v-show="dialog.type==1">
              <el-input v-model="dialog.erialNumber"></el-input>
            </el-form-item>
            <el-form-item label="拒付理由" v-show="dialog.type==2">
              <el-input type="textarea" v-model="dialog.request_remark"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div v-else class="detail">
          <div>
            <div>提现单号:</div>
            <div>{{drawDetail.draw_cash_order_number}}</div>
          </div>
          <div>
            <div>申请人:</div>
            <div>{{drawDetail.uname}}</div>
          </div>
          <div>
            <div>收款账户:</div>
            <div>
              <p>{{drawDetail.user_real_name + "(" +drawDetail.account_number+")"}}</p>
              <p></p>
            </div>
          </div>
          <div>
            <div>提现金额:</div>
            <div>{{drawDetail.draw_money}}</div>
          </div>
          <div>
            <div>手续费:</div>
            <div>{{drawDetail.commission_money}}</div>
          </div>
          <div>
            <div>提现时间:</div>
            <div>{{drawDetail.request_time }}</div>
          </div>
          <div>
            <div>提现状态:</div>
            <div> {{drawDetail.request_state	| stateFilter}}</div>
          </div>
          <div v-show="drawDetail.request_state == 4">
            <div>备注(拒绝原因):</div>
            <div>{{drawDetail.request_remark}}</div>
          </div>
          <div v-show="drawDetail.request_state == 1 || drawDetail.request_state == 2">
            <div>汇款流水号:</div>
            <div>{{drawDetail.serial_number	}}</div>
          </div>
          <div>
            <div>操作员:</div>
            <div>{{drawDetail.deal_staff_name	}}</div>
          </div>
          <div>
            <div>操作时间:</div>
            <div>{{drawDetail.deal_time}}</div>
          </div>

        </div>

        <span slot="footer" class="dialog-footer" v-show="dialog.type!=3">
          <el-button type="primary" @click="sure">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import util from "../utils/util";
export default {
  data() {
    return {
      withdrawList: [], // 订单列表
      page: 1, //页码
      total: 0, //列表总条数
      pageNum: 10, //每页显示的条数
      form: {
        draw_type: "", //提现类型
        request_state: "", //订单状态
        time: "", //时间段
        drawOpt: [
          {
            label: "收入提现",
            value: 1
          },
          {
            label: "收益提现",
            value: 2
          },
          {
            label: "余额提现",
            value: 3
          },
          {
            label: "质保金提现",
            value: 4
          }
        ], //提现类型选项
        requestStateOpt: [
          {
            label: "申请中",
            value: 0
          },
          {
            label: "待到账",
            value: 1
          },
          {
            label: "已到账",
            value: 2
          },
          {
            label: "已拒绝",
            value: 3
          }
        ] //提现状态选项
      },
      dialog: {
        title: "", //对话框标题
        type: "", //类型
        id: "", //记录id
        request_remark: "", //拒绝原因
        userName: "", //操作员
        erialNumber: "" //汇款流水号
      },
      dialogVisible: false, //对话框展示
      drawDetail: {} //详情
    };
  },
  methods: {
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 获取订单详情
     * @param {type}
     * @returns:
     * @Date: 2020-06-19 17:10:00
     */
    getwithObj(order_id) {
      this.$api
        .getWithDraw({ order_id })
        .then(res => {
          if (res.code == 0) {
            this.drawDetail = res.data;
            this.drawDetail.deal_time = util.dateFormat(
              "YYYY-mm-dd HH:MM:SS",
              new Date(this.drawDetail.deal_time * 1000)
            );
            this.drawDetail.request_time = util.dateFormat(
              "YYYY-mm-dd HH:MM:SS",
              new Date(this.drawDetail.request_time * 1000)
            );
            this.dialogVisible = true;
          } else {
            this.$message.error(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 确定拒绝或者付款
     * @param {type}
     * @returns:
     * @Date: 2020-06-19 15:45:25
     */
    sure() {
      let that = this;
      if (that.dialog.type == 1 && !that.dialog.erialNumber) {
        that.$message.error("请填写汇款流水号");
        return;
      } else if (this.dialog.type == 2 && !that.dialog.request_remark) {
        that.$message.error("请填写拒付原因");
        return;
      }

      let data = {
        id: that.dialog.id,
        request_state: that.dialog.type == 1 ? 2 : 3,
        serial_number: that.dialog.erialNumber,
        deal_staff_name: that.dialog.userName,
        request_remark: that.dialog.request_remark
      };
      that.$api
        .acceptWithDraw(data)
        .then(res => {
          if (res.code == 0) {
            that.withdrawList.find(item => {
              if (item.id == that.dialog.id) {
                item.request_state = that.dialog.type == 1 ? "2" : "3";
              }
            });
            that.handleClose();
          } else {
            that.$message.error(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 对话框关闭
     * @param {type}
     * @returns:
     * @Date: 2020-06-19 15:42:57
     */
    handleClose() {
      this.dialog = {
        title: "",
        type: "",
        id: "",
        request_remark: "",
        userName: "",
        erialNumber: ""
      };
      this.dialogVisible = false;
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 对话框打开
     * @param {number} 1 付款，2 拒付，3,查看详情
     * @returns:
     * @Date: 2020-06-19 15:12:31
     */
    dialogShow(type, id) {
      this.dialog.type = type;
      this.dialog.id = id;
      this.dialog.userName = "45445454";
      switch (type) {
        case 1:
          this.dialog.title = "付款";
          this.dialogVisible = true;
          break;
        case 2:
          this.dialog.title = "拒付";
          this.dialogVisible = true;
          break;
        case 3:
          this.dialog.title = "查看详情";
          this.getwithObj(id);
          break;
      }
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 格式化时间
     * @param {type}
     * @returns:
     * @Date: 2020-06-17 09:08:30
     */
    formatterTime(row, column, cellValue) {
      return util.dateFormat("YYYY-mm-dd HH:MM:SS", new Date(cellValue * 1000));
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 页面条数改变
     * @param {type}
     * @returns:
     * @Date: 2020-06-16 10:26:23
     */
    sizeChange(pageNum) {
      this.page = 1;
      this.pageNum = pageNum;
      this.getwithdraw();
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 搜索
     * @param {type}
     * @returns:
     * @Date: 2020-06-16 10:08:53
     */
    search() {
      this.page = 1;
      this.getwithdraw();
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 页码改变
     * @param {type}
     * @returns:
     * @Date: 2020-06-15 19:37:54
     */
    currentChange(page) {
      this.page = page;
      this.getwithdraw();
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 查询记录
     * @param {type}
     * @returns:
     * @Date: 2020-06-15 19:30:20
     */
    getwithdraw() {
      let data = {
        draw_type: this.form.draw_type,
        request_state: this.form.request_state,
        start_time: this.form.time
          ? new Date(this.form.time[0]).getTime() / 1000
          : "",
        end_time: this.form.time
          ? new Date(this.form.time[1]).getTime() / 1000
          : "",
        page: this.page - 1,
        page_num: this.pageNum
      };
      this.$api
        .getwithdraw(data)
        .then(res => {
          if (res.code == 0) {
            this.total = parseInt(res.data.count);
            this.withdrawList = res.data.list;
          } else {
            this.$message({
              message: res.message,
              type: "error"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getwithdraw();
  },
  filters: {
    stateFilter(val) {
      switch (val) {
        case "0":
          return "申请中";
        case "1":
          return "待到账";
        case "2":
          return "已到账";
        case "3":
          return "已拒绝";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  > div {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;

    div {
      display: inline-block;
    }
    div:nth-child(1) {
      width: 100px;
    }
  }
}
</style>

<style lang="less">
.withdraw .el-dialog .el-form-item__content {
  width: 300px;
}
</style>