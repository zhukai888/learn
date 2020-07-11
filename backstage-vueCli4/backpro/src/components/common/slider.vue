<!--
 * @Description: 侧边栏组件
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-01 17:38:02
 * @FilePath: \backpro\src\components\common\slider.vue
--> 

<template>
  <div class='slider'>
    <el-row>
      <el-col style="height:100vh">
        <el-menu class="el-menu-vertical-demo" router background-color="#001529" text-color="#fff" active-text-color="#ffd04b" :collapse="slideShow"
          :default-active="activeMenu" unique-opened>
          <div class="logo">
            <img src="../../assets/images/logo.png" alt="">
            <div>艺术融媒体</div>
          </div>

          <template v-for="(topRouter,topindex) in routerList">

            <el-menu-item v-if="topRouter.only" :index="topRouter.path" :key="topindex">
              <i class="el-icon-menu"></i>
              <span>{{topRouter.children[0].name }}</span>
            </el-menu-item>

            <el-submenu :key="topindex" v-else :index="topRouter.path">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{topRouter.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(bottomRouter,bottomIndex) in topRouter.children" :key="bottomIndex" :index="topRouter.path +'/'+ bottomRouter.path">
                  {{bottomRouter.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </template>

        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../../router/config";
export default {
  data() {
    return {
      activeMenu: "",
      routerList: []
    };
  },
  computed: mapState({
    slideShow: "slideShow"
  }),
  watch: {
    $route() {
      this.activeMenu = this.$route.fullPath;
    }
  },
  methods: {},
  created() {
    this.activeMenu = this.$route.fullPath;
    this.routerList = router.filter(item => !item.hidden);
  }
};
</script>

<style lang='less' scoped>
.slider {
  display: inline-block;
  .el-row {
    .el-menu {
      height: 100vh;

      .logo {
        padding: 30px 0;
        font-size: 16px;
        text-align: center;
        color: #fff;
        box-sizing: border-box;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>

<style>
.slider .el-menu {
  width: 200px;
}

.slider .el-menu--collapse {
  width: 64px;
}
</style>
