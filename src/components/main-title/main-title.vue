<template>
  <ul class="main-title clearfix">
    <li class="header">{{header}}</li>
    <template v-for="(item,idx) in titles">
      <li class="item" :key="item.id" @mouseenter="mouseenter" @mouseleave="leave">{{item.title}}</li>
    </template>
    <slot name="more"></slot>
  </ul>
</template>
<script>
export default {
  name: 'MainTitle',
  props: ['titles', 'header'],
  data() {
    return {
    }
  },

  methods: {
    mouseenter(e) {
      e.target.classList.add('active')
      this.$emit('change',e.target.innerHTML)
    },
    leave(e) {
       e.target.classList.remove('active')
    }
  }
}
</script>

<style lang='scss' scoped>
.main-title {
  width: 100%;
  height: 44px;
  color: #fff;
  line-height: 44px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .header {
    font-weight: 400;
    font-size: 18px;
    margin: 0 20px;
    float: left;
  }
  .item {
    padding: 0 5px;
    float: left;
    font-size: 14px;
    position: relative;
  }
  .more {
    float: right;
  }
  .active:after {
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #fff;
    content: " ";
    display: block;
    width: 2px;
    height: 0;
    top: 37px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
