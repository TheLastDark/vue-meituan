<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您，
      <span class="username">{{ user }}</span>
      [
      <router-link to="/exit" class="exit">退出</router-link>]
    </template>
    <template v-else>
      <router-link class="login" to="/login">立即登录</router-link>
      <router-link class="register" to="/register">注册</router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'User',

  data() {
    return {
      user: ''
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import '~common/scss/var.scss';
.username {
  color: $-color-primary;
  cursor: pointer;
}

.login,
.register {
  font-size: 12px;
  line-height: 40px;
  color: $-color-text-sub;
  margin: 0 5px;
  text-decoration: none;

  &.login {
    color: $-color-primary;
    margin: 0 5px 0 20px;
  }

  &:hover {
    color: $-color-primary;
  }
}
</style>
