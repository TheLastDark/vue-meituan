<template>
  <div id="app">
    <el-container class="layout-default">
      <el-header>
        <my-header class="m-header"></my-header>
        <div class="nav-box">
          <my-nav class="m-nav"></my-nav>
        </div>
      </el-header>
      <el-main>
        <my-banner></my-banner>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from './views/header/Header'
import MyNav from './views/nav/nav'
import MyBanner from './views/banner/banner'
export default {
  name: 'app',
  components: {
    MyHeader,
    MyNav,
    MyBanner
  }
}
</script>

<style lang="scss" scope>
#app {
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
    .m-nav {
      width: 1190px;
      margin: 0 auto;
    }
    .nav-box {
      width: 100%;
      background: #fff;
    }
  }
}

// .layout-default {
//   -webkit-font-smoothing: antialiased;
//   font-family: "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue",
//     "MIcrosoft YaHei", sans-serif !important;
//   background-color: #f8f8f8;
// }
// .search-panel {
//   height: 157px;
//   display: flex;
//   padding: 20px 20px;
//   background: #fff;
//   align-items: start;
//   box-sizing: border-box;
// }
</style>
