<template>
  <el-row class="banner-container">
    <el-col :span="5">
      <left-banner class="my-left-banner"></left-banner>
    </el-col>
    <el-col :span="19">
      <right-banner class="my-right-banner"></right-banner>
    </el-col>
  </el-row>
</template>
<script>
import LeftBanner from 'components/banner/left-banner'
import RightBanner from 'components/banner/right-banner'
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
    RightBanner
  }
}
</script>

<style lang='scss' scoped>
.banner-container {
  display: flex;
  flex-direction: row;
  .my-left-banner {
    height: 425px;
  }

  .my-right-banner {
  }
}
</style>
