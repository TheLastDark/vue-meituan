<template>
  <div class="container">
    <div class="search-warp">
      <el-autocomplete
        class="inline-input"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="搜索商家或地点"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
      <el-button type="primary" icon="el-icon-search" class="search-button">搜索</el-button>
    </div>
    <div class="hotwold">
      <a href="">杭州乐园</a>
      <a href="">杭州宋城景区</a>
      <a href="">杭州动物园</a>
      <a href="">杭州长乔极地海洋公园</a>
      <a href="">杭州野生动物世界</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Serach',

  data() {
    return {
      restaurants: [],
      state: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        // 转化成小写然后判断queryString在建议值的的位置是不是第一个字
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.search-warp {
  .inline-input {
    width: 80%;
  }
  .search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -2px;
    position: relative;
  }
}
.hotwold {
  padding-top: 8px;
  padding-left: 12px;
  overflow: hidden;
  display: inline-flex;

  a {
    color: $-color-text-sub;
    margin: 0 10px 3px 0;
    text-decoration: none;
  }
}
</style>
