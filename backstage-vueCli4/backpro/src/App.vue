<!--
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-30 11:22:24
--> 
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: mapState({
    routeTags: "routeTags"
  }),
  methods: {},
  created() {},
  mounted() {
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("routeTags", JSON.stringify(this.routeTags));
    });
  }
};
</script>

<style lang="less">
@import url("./assets/style/base.css");
#app {
  background-color: #f7f7f7;
}
</style>
