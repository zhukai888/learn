<!--
 * @Description: 模板
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-01 10:50:03
 * @FilePath: \backpro\src\pages\home.vue
--> 
<template>
  <div class="home">
    <slider></slider>
    <div class="right">
      <TopBar></TopBar>
      <section class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </section>
    </div>
  </div>
</template>

<script>
import Slider from "../components/common/slider";
import TopBar from "../components/common/topBar";

export default {
  data() {
    return {};
  },
  components: {
    Slider,
    TopBar
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.home {
  display: flex;
  .right {
    flex: 1;
    height: 100vh;
    .container {
      height: calc(100% - 140px);
      margin: 15px;
      box-shadow: 0 0 10px 10px #eee;
      background-color: #fff;
      border-radius: 6px;
      padding: 20px 30px;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  }
}
</style>

<style>
</style>
