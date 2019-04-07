<template>
  <el-row class="m-nav">
    <el-col :span="5">
      <logo class="logo"></logo>
    </el-col>
    <el-col :span="12">
      <search class="search"></search>
    </el-col>
  </el-row>
</template>
<script>
import Logo from 'components/nav/logo'
import Search from 'components/nav/search'
export default {
  name: 'MyNav',

  data() {
    return {
    }
  },

  methods: {},
  components: {
    Logo,
    Search
  }
}
</script>

<style lang='scss' scoped>
.m-nav {
  padding-bottom: 35px;
  .logo {
    padding: 28px 0 40px 0;
  }
  .search {
    padding-top: 28px;
  }
}
</style>
