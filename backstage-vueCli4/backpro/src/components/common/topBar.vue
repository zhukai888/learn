<!--
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-01 17:44:28
 * @FilePath: \backpro\src\components\common\topBar.vue
--> 

<template>
  <div class='topBar'>
    <el-row>
      <div class="leftPanle">
        <i class="el-icon-s-fold" @click="changeSlider" v-show="!slideShow"></i>
        <i class="el-icon-s-unfold" @click="changeSlider" v-show="slideShow"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item,idx) in breadcrumb" :key="idx">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="rightPanle">
        <img src="https://i.gtimg.cn/club/item/face/img/8/15918_100.gif" alt="" class="userPic">
        <el-menu mode="horizontal" @select="handleSelect" text-color="#666">

          <el-submenu index="submenu">
            <template slot="title">管理员名称 </template>
            <el-menu-item index="personal">
              <template>
                <img src="../../assets/images/user.png" class="centerPic">
                <span>个人中心</span>
              </template>
            </el-menu-item>
            <el-menu-item index="logout">
              <template>
                <img src="../../assets/images/logout.png" alt="" class="centerPic">
                <span>退出</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-row>
    <el-row class="tagContainer">

      <el-tag :key="index" v-for="(tag,index) in routeTags" :effect="tag.path == fullPath ? 'dark' : 'plain'" :closable="tag.colseFlag ? false :true"
        @close="closeTag(index)" @click="openTag(tag.path)">
        {{tag.name}}
      </el-tag>
    </el-row>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      inputVisible: false,
      inputValue: "",
      breadcrumb: [], //面包屑数组
      fullPath: "" //页面路径
    };
  },
  computed: mapState({
    slideShow: "slideShow",
    routerList: "routerList",
    routeTags: "routeTags"
  }),
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 处理右上角选择
     * @param {string} key 绑定的index，personal 个人中心，logout 退出
     * @returns:
     * @Date: 2020-07-06 11:38:26
     */
    handleSelect(key) {
      console.log(key);
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 打开标签
     * @param {type}
     * @returns:
     * @Date: 2020-07-03 16:27:23
     */
    openTag(path) {
      this.$router.push(path);
    },
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 关闭标签
     * @param {type}
     * @returns:
     * @Date: 2020-07-02 15:20:52
     */
    closeTag(index) {
      if (this.fullPath == this.routeTags[index].path) {
        if (this.fullPath == this.routeTags[this.routeTags.length - 1].path) {
          this.$router.push(this.routeTags[this.routeTags.length - 2].path);
        } else {
          this.$router.push(this.routeTags[this.routeTags.length - 1].path);
        }
      }
      this.$store.commit("reduceRouteTag", index);
    },

    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 改变侧边栏显示
     * @param {type}
     * @returns:
     * @Date: 2020-07-02 16:22:31
     */
    changeSlider() {
      this.$store.commit("changeSlideShow");
    },

    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 获取面包屑,以及标签
     * @param {type}
     * @returns:
     * @Date: 2020-07-03 14:20:23
     */
    getBreadcrumb() {
      this.breadcrumb = [];
      this.fullPath = this.$route.fullPath;

      this.$route.matched.forEach(item => {
        this.breadcrumb.push(item.name);
      });

      let path = this.$route.fullPath;
      let name = this.$route.name;
      let repeatRoute = this.routeTags.filter(item => item.path == path);
      if (repeatRoute.length == 0) {
        this.$store.commit("plusRouterTag", { path, name });
      }
    }
  },

  created() {
    this.getBreadcrumb();
  }
};
</script>

<style lang='less' scoped>
.topBar {
  height: 110px;
  background-color: #fff;
  border-bottom: 1px solid #fefefe;
  box-sizing: border-box;
  .el-row {
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    height: 55px;
    box-sizing: border-box;
    display: flex;
    > div {
      width: 50%;
      display: inline-block;
      height: 100%;
    }
    .leftPanle {
      height: 55px;
      display: flex;
      align-items: center;
      justify-items: center;
      .el-breadcrumb {
        margin-left: 20px;
      }
    }
    .rightPanle {
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .userPic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }

  .tagContainer {
    box-sizing: border-box;
    height: 55px;
    user-select: none;
    border-top: 1px solid #f6f6f6;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
}
</style>

<style>
.topBar .el-tag {
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  padding: 0 12px;
}
.topBar .leftPanle .el-icon-s-fold:before,
.topBar .leftPanle .el-icon-s-unfold:before {
  font-size: 24px;
  opacity: 0.6;
}

.topBar .rightPanle .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 55px;
}

.el-menu--horizontal .centerPic {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}

body .el-menu--popup {
  min-width: 150px;
}
</style>