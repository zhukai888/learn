<!--
 * @Description: 邀请记录页面
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-15 17:35:03
-->

<template>
  <div class="invitRecord">
    <el-form ref="form" label-width="100px" inline class="searchFrom">
      <el-form-item label="用户名：">
        <el-input v-model="userName" placeholder="请输入用户名" class="search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="recordList" border style="width:100%">
      <el-table-column prop="id" label="id" align="center">
      </el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope">
          <img :src="imgURl+scope.row.headimg" alt="" class="headimg">
        </template>
      </el-table-column>
      <el-table-column prop="user_id" label="邀请人id" align="center">
      </el-table-column>
      <el-table-column prop="user_name" label="邀请人姓名" align="center">
      </el-table-column>
      <el-table-column prop="be_invited_userid" label="被邀请人id" align="center">
      </el-table-column>
      <el-table-column prop="be_invited_user_name" label="被邀请人姓名" align="center">
      </el-table-column>
      <el-table-column prop="addtime" label="邀请成功时间" align="center" :formatter="formatterTime">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="replace(scope.row.be_invited_userid)">查看被邀请人记录</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next, sizes" :total="total" :page-size.sync="pageNum" :page-sizes="[10, 20, 50]" :current-page.sync="page"
      @current-change="currentChange" @size-change="sizeChange">
    </el-pagination>
  </div>
</template>

<script>
import common from "../utils/common";
import util from "../utils/util";
export default {
  data() {
    return {
      recordList: [], //邀请记录列表
      imgURl: common.imgURL, //图片路径
      uid: "", //uid
      page: 1, //页码
      total: 0, //列表总条数
      pageNum: 10, //每页显示的条数
      userName: "" //用户名
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
      this.getRecordList();
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
      this.uid = "";
      this.getRecordList();
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
      this.getRecordList();
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 查看别人的邀请记录
     * @param {type}
     * @returns:
     * @Date: 2020-06-15 19:21:02
     */
    replace(uid) {
      // this.$router.replace({ path: "/", query: { uid } });
      this.uid = uid;
      this.page = 1;
      this.userName = "";
      this.getRecordList();
    },

    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 查询记录
     * @param {type}
     * @returns:
     * @Date: 2020-06-15 19:30:20
     */
    getRecordList() {
      let data = {
        user_id: this.uid,
        user_name: this.userName,
        page: this.page - 1,
        pagenum: this.pageNum
      };
      this.$api
        .getInvit(data)
        .then(res => {
          if (res.code == 0) {
            this.total = parseInt(res.data.count);
            this.recordList = res.data.list;
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
    this.getRecordList();
  }
};
</script>


<style lang="less" scoped>
.invitRecord {
  .headimg {
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
  }
}
</style>
