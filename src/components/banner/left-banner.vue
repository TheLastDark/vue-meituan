<template>
  <div class="left-banner">
    <div class="banner-header">全部分类</div>
    <ul class="menu" @mouseleave="mouseleave">
      <li v-for="(item ,id) in menu" @mouseenter="mouseenter">
        <div>
          <i :class="item.type" class="iconfont"></i>
          <a href>{{item.name}}</a>
        </div>
        <span class="el-icon-arrow-right"></span>
      </li>
      <div class="detail-container" v-show="kind">
        <template v-for="(item, idx) in curdetail.detail">
          <div class="title-wrap">
            <h4 :key="idx">{{item.title}}</h4>
            <div>
              更多
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <div class="detail-child">
            <a v-for="v in item.child">{{v}}</a>
          </div>
        </template>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LeftBanner',
  data() {
    return {
      kind: '',
      menu: [
        {
          type: 'icon-shiwu',
          name: '食物',
          detail: [
            {
              title: '食物',
              child: ['代金券', '甜点饮食', '火锅', '自助餐', '日韩料理', '烧烤', '东北菜', '川菜', '烤鱼', '海鲜']
            }
          ]
        }, {
          type: 'icon-jiudian',
          name: '酒店',
          detail: [
            {
              title: '酒店',
              child: ['经济', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }, {
          type: 'icon-dianying',
          name: '电影',
          detail: [
            {
              title: '电影',
              child: ['雷霆沙赞！', '反贪风暴', '调音师', '小偷家族', '风中有朵雨做的云', '青蛙王子历险记', '比悲伤更悲伤的故事', '波西米亚狂想曲', '烤鱼', '海鲜']
            },
            {
              title: '热门影院',
              child: ['中影国际影城', '金逸影城', '星美国际影城', '横店电影城', '比高电影城', '保利国际影城', 'CGV影城']
            }
          ]
        }, {
          type: 'icon-meishi',
          name: '机票/火车票',
          detail: [
            {
              title: '机票',
              child: ['国内机票', '国际机票']
            },
            {
              title: '火车票',
              child: ['火车票']
            }
          ]
        },
        {
          type: 'iconfont icon-shiwu',
          name: '食物'
        }, {
          type: 'icon-jiudian',
          name: '酒店'
        }, {
          type: 'icon-dianying',
          name: '电影'
        }, {
          type: 'icon-meishi',
          name: '美食'
        },
        {
          type: 'iconfont icon-shiwu',
          name: '食物'
        }, {
          type: 'icon-jiudian',
          name: '酒店'
        }, {
          type: 'icon-dianying',
          name: '电影'
        }, {
          type: 'icon-meishi',
          name: '美食'
        },
        {
          type: 'iconfont icon-shiwu',
          name: '食物'
        }, {
          type: 'icon-jiudian',
          name: '酒店'
        }, {
          type: 'icon-dianying',
          name: '电影'
        }, {
          type: 'icon-meishi',
          name: '美食'
        }
      ]
    }
  },
  computed: {
    curdetail: function () {
      return this.kind ? this.menu.filter(item => item.name === this.kind)[0] : []

    }
  },
  methods: {
    mouseleave() {
      this.timer = setTimeout(() => {
        this.kind = ''
      }, 150);
    },
    mouseenter(e) {
      this.kind = e.target.querySelector('a').innerHTML
    }
  }

}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.left-banner {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    -180deg,
    rgba(2, 181, 157, 0.85) 2%,
    rgba(22, 146, 183, 0.85) 100%
  );
  .banner-header {
    background-color: $-color-primary;
    height: 50px;
    box-sizing: border-box;
    padding-top: 15px;
    font-size: 16px;
    font-weight: 400;
    padding-left: 15px;
    color: #fff;
    position: absolute;
    top: -50px;
    width: 100%;
  }
  .menu {
    padding-top: 15px;

    li {
      color: #fff;
      padding: 0 12px;
      font-size: 13px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        color: $-color-icon;
      }
      a {
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        margin-left: 10px;
      }
      span {
        float: right;
      }
    }

    li:hover {
      background-color: $-color-primary-light;

      i {
        color: #fff;
      }
    }
  }
}
.detail-container {
  width: 400px;
  height: 396px;
  position: absolute;
  z-index: 999;
  left: 100%;
  top: 10px;
  background-color: #fff;
  color: $-color-text-sub;
  font-size: 12px;
  padding: 0 20px 20px 20px;
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 0 10px 0;
    h4 {
      font-weight: 500;
      font-size: 18px;
      color: $-color-text-main;
    }
  }

  .detail-child {
    display: inline-flex;
    flex-wrap: wrap;
    overflow: hidden;
    a {
      line-height: 15px;
      cursor: pointer;
      text-decoration: none;
      margin-right: 16px;
      margin-top: 10px;

      &:hover {
        color: $-color-primary;
      }
    }
  }
}
</style>
