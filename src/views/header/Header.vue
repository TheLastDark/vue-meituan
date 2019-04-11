<template>
  <div class="header-wrap">
    <el-row :gutter="0" class="my-header">
    <el-col :span="4">
      <geo></geo>
    </el-col>
    <el-col :span="8">
      <user></user>
    </el-col>
   <el-col :span="12">
      <my-nav class="my-nav"></my-nav>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import Geo from 'components/topNav/geo'
import User from 'components/topNav/user'
import MyNav from 'components/topNav/nav'
export default {
  name: 'MyHeader',
  components: {
    Geo,
    User,
    MyNav
  }
}
</script>

<style lang='scss' scoped>
</style>
