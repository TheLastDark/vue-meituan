<template>
  <div id="home">
    <el-container class="layout-default">
      <el-header>
        <my-header class="m-header"></my-header>
        <div class="nav-box">
          <my-nav class="com-nav"></my-nav>
        </div>
      </el-header>
      <el-main>
        <my-banner></my-banner>
        <my-main class="my-main"></my-main>
      </el-main>
      <el-footer height="100%">
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../header/Header'
import MyNav from '../nav/nav'
import MyBanner from '../banner/banner'
import MyMain from '../main/main'
import MyFooter from '../footer/Footer'
export default {
  name: 'Home',
  components: {
    MyHeader,
    MyNav,
    MyBanner,
    MyMain,
    MyFooter

  }
}
</script>

<style lang="scss" scope>
#home {

  .el-header,
  .el-main,
  .el-footer {
    width: 1190px;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
  }

  .el-header {
    background: #f8f8f8;
    width: 100%;
    font-size: 12px;
    height: 100% !important;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
    &.m-header {
      height: 40px;
    }
    .m-header,
    .com-nav {
      width: 1190px;
      margin: 0 auto;
    }
    .nav-box {
      width: 100%;
      background: #fff;
    }
  }
}
.my-main {
  margin-top: 40px;
}
</style>
