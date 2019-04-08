<template>
  <div class="right-banner-container">
    <div class="header-links">
      <router-link to="/seller">美团外卖</router-link>
      <router-link to="/seller">猫眼电影</router-link>
      <router-link to="/seller">美团酒店</router-link>
      <router-link to="/seller">民宿/公寓</router-link>
      <router-link to="/seller">商家入驻</router-link>
      <router-link to="/seller">美团公益</router-link>
    </div>
    <div class="banner-box">
      <el-carousel height="240px" class="banner-wrap">
        <el-carousel-item v-for="item in bannerImgs" :key="item.id">
          <img :src="item.url" alt>
        </el-carousel-item>
      </el-carousel>
      <div class="item-pic"></div>
      <div class="default">
        <div class="header-img">
          <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
        </div>
        <h4>Hi! 你好</h4>
        <div class="button">注册</div>
        <div class="button">登陆</div>
      </div>
    </div>
    <div class="bd-wrap">
      <div class="bd-1 bd"></div>
      <div class="bd-2 bd"></div>
      <div class="bd-3 bd"></div>
      <div class="qrcode">
        <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
        <h4>美团App手机版</h4>
        <span><b>一元起</b>吃喝玩乐</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightBanner',

  data() {
    return {
      bannerImgs: [
        {
          id: 1,
          url: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
        },
        {
          id: 2,
          url: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
        },
        {
          id: 3,
          url: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
        },
        {
          id: 4,
          url: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
        },
        {
          id: 5,
          url: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
        }
      ]
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.right-banner-container {
  position: relative;
  margin: 10px 0 0 10px;
  .header-links {
    font-weight: 550;
    font-size: 16px;
    display: inline-flex;
    position: absolute;
    top: -40px;
    line-height: 16px;

    a {
      text-decoration: none;
      color: $-color-text-main;
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  .banner-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .banner-wrap {
      width: 550px;

      img {
        width: 100%;
        height: auto;
      }
    }
    .item-pic {
      background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
      width: 150px;
      height: 240px;
      background-size: 150px;
    }

    .default {
      padding-top: 30px;
      width: 212px;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      height: 240px;
      background: #fff;
      display: flex;
      // justify-items: center;
      flex-direction: column;
      align-items: center;
      .header-img {
        margin-bottom: 4px;
        vertical-align: middle;
        text-align: center;
        img {
          width: 47px;
          height: 47px;
          border-radius: 50%;
          border: 4px solid #e5e5e5;
        }
      }
      .button {
        margin: 10px;
        border-radius: 20px;
        border: 1px solid #e5e5e5;
        cursor: pointer;
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;

        &:hover {
          background-color: #f6f6f6;
        }
      }
      h4 {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  .bd-wrap {
    display: flex;
    flex-direction: row;
    .bd {
      margin: 10px 10px 0 0;
    }
    .bd-1 {
      width: 270px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
      background-size: 270px;
    }
    .bd-2 {
      width: 270px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
      background-size: 270px;
    }
    .bd-3 {
      width: 150px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
      background-size: 150px;
    }
    .qrcode {
      margin-top: 10px;
      width: 212px;
      border: 1px solid #e5e5e5;
      height: 165px;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;

      img {
        width: 95px;
        height: 95px;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      h4 {
        font-size: 16px;
        margin-bottom: 10px;
      }

      b {
        font-size: 12px;
        color: #ec5330;
        padding-right: 10px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
