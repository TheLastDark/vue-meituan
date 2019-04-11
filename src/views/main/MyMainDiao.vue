<template>
  <div class="diao-container">
    <main-title :titles="titles" class="titles" :header="header" @change="onChange"></main-title>
    <div class="detail">
      <div class="detail-item" v-for="(item, idx) in details">
        <img :src="item.url" alt>
        <h4>{{item.title}}</h4>
        <span class="menu">{{item.menu}}</span>
        <div class="price">
          <span>{{item.price}}</span>
          <i>{{item.priceHr}}</i>
          <b>{{item.location}}</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from 'components/main-title/main-title'
export default {
  name: 'MyMainDiao',

  data() {
    return {
      kind: '全部',
      details: [],
      header: '有格调',
      titles: [
        {
          id: 1,
          title: '全部',
        },
        {
          id: 2,
          title: '约会聚餐',
        },
        {
          id: 3,
          title: '电影演出',
        },
        {
          id: 4,
          title: '品质出游',
        }
      ],

      detailList: {
        全部: [
          {
            id: 1,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院点）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          },
          {
            id: 2,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院点）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          },
          {
            id: 3,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院店）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          },
          {
            id: 4,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院点）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          },
          {
            id: 5,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院点）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          },
          {
            id: 6,
            url: '//p1.meituan.net/msmerchant/e79b718e32bdf3e2f2da447001a68d5d1591138.jpg@456w_257h_1e_1c',
            title: '必胜客（剧院点）',
            menu: '3份澳洲西冷牛排1份',
            price: '￥177',
            priceHr: '门市价￥237',
            location: '武林广场'
          }
        ],
        约会聚餐: [
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
          {
            id: 1,
            url:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            price: "￥99",
            priceHr: '门市价￥237',
            location: "奈瑞儿美颜塑身SPA（大中华店）",

          },
        ]

      }
    }
  },
  mounted() {
      this.details = this.detailList[this.kind]    
  },
  components: {
    MainTitle
  },
  methods: {
    onChange(e) {
      this.kind = e
      this.details = this.detailList[this.kind]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.diao-container {
  .titles {
    background: #c0a980;
  }
  .detail {
    border: 1px solid #e5e5e5;
    border-top: none;
    min-height: 200px;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    :hover {
      background-color: #eeeeee;
    }
    .detail-item {
      padding: 10px;
      width: 33.3%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      font-size: 12px;
      color: $-color-text-sub;
      img {
        width: 100%;
        height: 208px;
      }
      h4 {
        line-height: 40px;
        font-size: 16px;
        color: $-color-text-main;
      }
      .menu {
        margin-bottom: 10px;
      }
      .price {
        span {
          color: #c0a980;
          font-size: 18px;
          padding-right: 10px;
        }
        i {
          text-decoration: line-through;
        }
        b {
          float: right;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
