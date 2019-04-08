<template>
  <el-row class="banner-container">
    <el-col :span="5">
      <left-banner class="my-left-banner"></left-banner>
    </el-col>
    <el-col :span="19">
      <right-banner class="my-right-banner"></right-banner>
      <login></login>
    </el-col>
  </el-row>
</template>
<script>
import LeftBanner from 'components/banner/left-banner'
import RightBanner from 'components/banner/right-banner'
import Login from 'components/banner/login'
export default {
  name: 'Banner',

  data() {
    return {
    }
  },
  computed: {
  },
  methods: {},
  components: {
    LeftBanner,
    RightBanner,
    Login
  }
}
</script>

<style lang='scss' scoped>
.banner-container {
  display: flex;
  flex-direction: row;
  .my-left-banner {
    height: 475px;
  }

  .my-right-banner {
  }
}
</style>
