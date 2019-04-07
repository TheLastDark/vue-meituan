<template>
  <div class="banner-container">
    <left-banner class="left-banner"></left-banner>
    <right-banner class="right-banner"></right-banner>
  </div>
</template>
<script>
import LeftBanner from 'components/banner/left-banner'
import RightBanner from 'components/banner/right-banner'
export default {
  name: 'Banner',

  data () {
    return {
    }
  },

  methods: {},
  components: {
    LeftBanner,
    RightBanner
  }
}
</script>

<style lang='scss' scoped>
.banner-container {
  display: flex;

  .left-banner {

  }

  .right-banner {

  }
}
</style>
