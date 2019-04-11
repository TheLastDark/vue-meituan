<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list hover1">
        <router-link to="/My">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="/order">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/shou">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/quan">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="/App">手机App</router-link>
      </li>
      <li class="list bd">
        <router-link to="/Seller">商家中心</router-link>
        <dl>
          <dd>
            <router-link to="/shehzi">登陆商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/shehzi">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link to="/daohang">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
            <dd>红烧鱼</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
            <dd>爱，死亡机器人</dd>
          </dl>
          <dl class="app">
            <dt>App</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </a>
            </dd>
            <dd>
              <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                >
              </a>
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/app/" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                  title="榛果app"
                  alt="榛果app"
                >
              </a>
            </dd>
            <dd>
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                >
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav',

  data() {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.m-nav {
  float: right;
  z-index: 999;
  color: $-color-text-sub;
  .nav {
    float: right;
    height: 40px;
    line-height: 40px;
    > li {
      float: left;
      width: 76px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      position: relative;
      height: 40px;

      a {
        text-decoration: none;
        color: $-color-text-sub;

        &:hover {
          color: $-color-primary;
        }
      }

      &.list:hover {
        border: 1px solid #e5e5e5;
        border-top: none;
        background: white;
        box-shadow: $-box-shadow-s;
        position: relative;
        height: 40px;

        > dl {
          display: block;
          border: 1px solid #e5e5e5;
          border-top: none;
          box-shadow: $-box-shadow-s;
        }
        .subContainer {
          display: flex;
        }
      }

      dl {
        background: #fff;
        display: none;
        z-index: 999;
        width: 100%;
        border: 1px solid transparent;

        dd {
          line-height: 35px;

          &:hover {
            color: $-color-primary;
          }
        }
      }
      &.hover1 {
        dl {
          position: absolute;
          right: -1px;
        }
      }

      &.bd {
        dl {
          width: 120px;
          position: relative;
          border: 1px solid #e5e5e5;
          left: -47px;
          top: -3px;

          &:before {
            content: " ";
            display: block;
            background: #fff;
            height: 4px;
            width: 76px;
            position: absolute;
            top: -1px;
            right: 0;
          }
        }

        &:hover {
          border-bottom: none;
        }
      }

      &.site {
        &:hover {
          border-bottom: none;
        }
      }

      .subContainer {
        box-sizing: border-box;
        background: #fff;
        padding: 30px 36px 36px 47px;
        width: 1190px;
        position: absolute;
        right: 0;
        z-index: 999;
        display: none;
        text-align: left;
        box-shadow: $-box-shadow-s;
        height: 300px;

        &:before {
          content: " ";
          display: block;
          width: 76px;
          height: 4px;
          background: #fff;
          position: absolute;
          top: -1px;
          right: 0;
        }

        > dl {
          box-sizing: border-box;
          text-align: left;
          display: inline-block !important;
          margin-right: 47px;
          overflow: hidden;

          dt {
            margin-bottom: 26px;
            font-size: 14px;
            color: #31bbac;
            text-align: center;
          }

          dd {
            width: 77px;
            text-align: center;
            display: inline-flex;
            flex: 1;
          }

          &.hotel {
            width: 234px;
          }

          &.food {
            width: 156px;
          }

          &.movie {
            width: 90px;
            dd {
              width: 100%;
            }
          }

          &.app {
            flex: 1;
            text-align: center;
            dd {
              width: 60px;
              height: 73px;
              line-height: 73px;
              text-align: center;
              margin: 0 8px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
