<template>
  <div>
    <my-main-diao></my-main-diao>
    <my-main-movie></my-main-movie>
    <my-main-hotel></my-main-hotel>
    <my-main-love></my-main-love>
    <my-main-bottom-nav></my-main-bottom-nav>
  </div>
</template>
<script>
import MyMainBottomNav from './myMainBottomNav'
import MyMainDiao from './MyMainDiao'
import MyMainHotel from './MyMainHotel'
import MyMainLove from './MyMainLove'
import MyMainMovie from './MyMainMovie'
export default {
  name: 'Main',

  data() {
    return {
    }
  },
  components: {
    MyMainBottomNav,
    MyMainDiao,
    MyMainHotel,
    MyMainLove,
    MyMainMovie
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
