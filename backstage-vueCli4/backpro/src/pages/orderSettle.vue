<!--
 * @Description: 订单结算
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-19 09:22:24
--> 

<template>
  <div class="orderSettle">
    <el-form ref="form" :model="form" label-width="100px" inline class="searchFrom">
      <el-form-item label="商户名称：">
        <el-input v-model="form.uname" placeholder="请输入商户名称" class="search" clearable></el-input>
      </el-form-item>
      <el-form-item label="订单编号：">
        <el-input v-model="form.from_order_number" placeholder="请输入订单编号" class="search" clearable></el-input>
      </el-form-item>
      <el-form-item label="业务类型：">
        <el-select v-model="form.reward_type" placeholder="请选择业务类型" clearable>
          <el-option v-for="item in form.rewardOpt" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间段：">
        <el-date-picker unlink-panels v-model="form.time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <br>
      <el-form-item label="订单状态：">
        <el-select v-model="form.reward_order_state" placeholder="请选择业务类型" clearable>
          <el-option v-for="item in form.rewardOrderOpt" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="orderList" border style="width:100%">
      <el-table-column prop="id" label="id" align="center" width="80">
      </el-table-column>
      <el-table-column prop="statement_number" label="结算单号" align="center">
      </el-table-column>
      <el-table-column prop="from_order_number" label="订单编号" align="center">
      </el-table-column>
      <el-table-column label="业务类型" align="center" width="120">
        <template slot-scope="scope">
          {{scope.row.reward_type	 | typeFilter }}
        </template>
      </el-table-column>
      <el-table-column prop="gain_user_name" label="结算对象" align="center">
      </el-table-column>
      <el-table-column prop="reward_money" label="订单金额" align="center">
      </el-table-column>
      <el-table-column prop="actual_amount" label="结算金额" align="center">
      </el-table-column>
      <el-table-column label="结算状态" align="center">
        <template slot-scope="scope">
          {{scope.row.reward_order_state	 | stateFilter}}
        </template>
      </el-table-column>

      <el-table-column prop="addtime" label="添加时间" align="center" :formatter="formatterTime">
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next, sizes" :total="total" :page-size.sync="pageNum" :page-sizes="[10, 20, 50]" :current-page.sync="page"
      @current-change="currentChange" @size-change="sizeChange">
    </el-pagination>
  </div>

</template>

<script>
import util from "../utils/util";
export default {
  data() {
    return {
      orderList: [], // 订单列表
      page: 1, //页码
      total: 0, //列表总条数
      pageNum: 10, //每页显示的条数
      form: {
        uname: "", //用户名称
        from_order_number: "", //订单编号
        reward_type: "", //业务类型
        reward_order_state: "", //订单状态
        time: "", //时间段
        rewardOpt: [
          {
            label: "销售商品",
            value: 1
          },
          {
            label: "销售课程",
            value: 2
          },
          {
            label: "商品返佣",
            value: 3
          },
          {
            label: "课程返佣",
            value: 4
          }
        ], //业务类型选项
        rewardOrderOpt: [
          {
            label: "未到账（预收益）",
            value: 0
          },
          {
            label: "已到账",
            value: 1
          },
          {
            label: "已取消",
            value: 2
          }
        ] //订单状态选项
      }
    };
  },
  methods: {
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
      this.getOrderList();
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
      this.getOrderList();
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
      this.getOrderList();
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 查询记录
     * @param {type}
     * @returns:
     * @Date: 2020-06-15 19:30:20
     */
    getOrderList() {
      let data = {
        user_name: this.form.uname,
        from_order_number: this.form.from_order_number,
        reward_type: this.form.reward_type,
        reward_order_state: this.form.reward_order_state,
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
        .getOrderSettle(data)
        .then(res => {
          if (res.code == 0) {
            this.total = parseInt(res.data.count);
            this.orderList = res.data.list;
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
    this.getOrderList();
  },
  filters: {
    typeFilter(val) {
      switch (val) {
        case "1":
          return "销售商品";
        case "2":
          return "销售课程";
        case "3":
          return "商品返佣";
        case "4":
          return "课程返佣";
      }
    },
    stateFilter(val) {
      switch (val) {
        case "0":
          return "未到账（预收益）";
        case "1":
          return "已到账";
        case "2":
          return "已取消";
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>

<style lang="less">
</style>