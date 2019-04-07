<template>
  <div class="header-wrap">
    <el-row :gutter="0" class="my-header">
    <el-col :span="4">
      <geo></geo>
    </el-col>
    <el-col :span="8">
      <user></user>
    </el-col>
   <el-col :span="12">
      <my-nav></my-nav>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import Geo from 'components/topNav/geo'
import User from 'components/topNav/user'
import MyNav from 'components/topNav/nav'
export default {
  name: 'MyHeader',
  components: {
    Geo,
    User,
    MyNav
  }
}
</script>

<style lang='scss' scoped>
    // .left {
    //   width: 280px;
    //   padding-top: 15px;

    //   img {
    //     width: 126px;
    //     height: 46px;
    //   }
    // }

    // .center {
    //   flex: 1;

    //   .wrapper {
    //     margin-top: 16px;
    //     border: 1px solid #13d1be;
    //     border-radius: 4px;
    //     width: 552px;
    //     box-sizing: border-box;
    //     position: relative;
    //     white-space: nowrap;
    //     .el-input {
    //       width: 462px;
    //     }

    //     input {
    //       border: none;
    //       border-top-right-radius: 0;
    //       border-bottom-right-radius: 0;
    //     }

    //     .el-button {
    //       width: 88px;
    //       border: none;
    //       background: #13d1be;
    //       font-size: 16px;
    //       border-top-left-radius: 0;
    //       border-bottom-left-radius: 0;
    //       vertical-align: -1px;

    //       i {
    //         font-weight: bold;
    //       }
    //     }

    //     .hotPlace,
    //     .searchList {
    //       position: absolute;
    //       top: 41px;
    //       left: 0;
    //       background: #fff;
    //       padding: 10px;
    //       font-size: 12px;
    //       width: 462px;
    //       box-sizing: border-box;
    //       border: 1px solid #e5e5e5;
    //       border-top: none;
    //       z-index: 999;
    //       border-bottom-left-radius: 4px;
    //       border-bottom-right-radius: 4px;

    //       dt {
    //         color: #999;
    //         font-weight: bold;
    //       }

    //       dd {
    //         display: inline-block;
    //         color: #666;
    //         margin-right: 10px;
    //         margin-bottom: 3px;
    //         margin-top: 5px;
    //         cursor: pointer;

    //         &:hover {
    //           background: #f8f8f8;
    //           color: #31bbac;
    //         }
    //       }

    //       &.searchList {
    //         padding: 0;
    //         margin: 0;
    //         dd {
    //           margin: 0;
    //           padding: 3px 10px;
    //           display: block;
    //           line-height: 1.6;
    //         }
    //       }
    //     }
    //   }

    //   .suggest {
    //     width: 552px;
    //     overflow: hidden;
    //     padding-left: 16px;
    //     line-height: 1;
    //     margin-top: 8px;
    //     height: 14px;

    //     a {
    //       color: #999;
    //       margin-right: 10px;
    //       margin-bottom: 3px;
    //       display: inline-block;
    //       font-size: 12px;

    //       &:hover {
    //         color: #31bbac;
    //       }
    //     }
    //   }

    //   .nav {
    //     list-style: none;
    //     display: flex;
    //     margin-top: 25px;

    //     li {
    //       font-weight: 700;
    //       font-size: 16px;
    //       margin: 0 20px;
    //       cursor: pointer;
    //       position: relative;

    //       a {
    //         color: #222;

    //         &:hover {
    //           color: #f04d4e;
    //         }

    //         &.takeout:hover {
    //           color: #fbc700;
    //         }

    //         &.apartment:hover {
    //           color: #fdc411;
    //         }

    //         &.business:hover {
    //           color: #31bbac;
    //         }
    //       }
    //     }
    //   }
    // }

    // .right {
    //   text-align: right;
    //   padding-top: 15px;

    //   .security {
    //     li {
    //       display: inline-block;
    //       text-align: center;
    //       padding: 0 5px;
    //     }

    //     i {
    //       font-style: normal;

    //       &:after {
    //         font-family: iconfont;
    //         font-size: 36px;
    //         color: #13d1be;
    //       }
    //     }

    //     .refund {
    //       &:after {
    //         content: "\e65f";
    //       }
    //     }

    //     .single {
    //       &:after {
    //         content: "\e652";
    //       }
    //     }

    //     .overdue {
    //       &:after {
    //         content: "\e65e";
    //       }
    //     }

    //     .txt {
    //       color: #999;
    //       font-size: 12px;
    //       line-height: 1;
    //       margin: 0;
    //       text-align: center;
    //     }
    //   }
    // }
</style>
