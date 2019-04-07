<template>
  <div class="m-geo">
    <i class="el-icon-location">杭州市</i>
    <router-link class="changeCity" to="/changeCity">切换城市</router-link>[北京 上海 深圳]
  </div>
</template>
<script>
export default {
  name: 'Geo',

  data() {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var.scss";
.m-geo {
  color: $-color-text-com;
  font-size: 12px;
  line-height: 40px;
  
  .changeCity {
    background: #f4f4f4;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    color: $-color-text-com;
    // padding为了撑起增加热区margin隔离热区
    margin: 0 4px;
    padding: 0 2px;
    text-decoration: none;

    &:hover {
      color: $-color-primary;
    }
  }
}
</style>
