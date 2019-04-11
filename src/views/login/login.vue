<template>
  <div class="login-container">
    <header>
      <img src="./logo.png" alt>
    </header>
    <main class="clearfix">
      <div class="img-box">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt>
      </div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
          <el-form-item class="tibs">
            <span>账号登陆</span>
            <span>手机动态码登陆</span>
          </el-form-item>
          <el-form-item label="手机号" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pwd" class="code">
            <el-input v-model="form.pwd" type="password"></el-input>
            <span class="w-pwd">忘记密码？</span>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="btn-login">登陆</el-button>
            <div class="error">{{error}}</div>
          </el-form-item>
          <el-form-item class="tibs">
            <span>还没有账号?</span>
            <span>快速注册</span>
          </el-form-item>
        </el-form>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: 'Login',

  data() {
    return {
      form: {
        name: '',
        pwd: '',
      },
      error: '',
      rules: {
        name: [{
          required: true, type: "number", message: '请输入正确的电话号码', trigger: 'blur'
        }],
        pwd: [{
          required: true, type: "string", message: '创建密码', trigger: 'blur'
        }]
      }
    }
  },

  methods: {
    onSubmit() {

    }
  }
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var";
.login-container {
  header {
    padding: 30px 0;
    width: 980px;
    margin: 0 auto;
    img {
      display: block;
    }
  }
  main {
    margin: 0 auto 70px;
    width: 980px;

    .img-box {
      float: left;
    }
    .form {
      float: right;
      padding-right: 100px;
      padding-top: 50px;
    }
    .tibs {
      margin-bottom: 0px;
      span:nth-child(1) {
        font-size: 12px;
        color: $-color-text-sub;
      }
      span:nth-child(2) {
        font-size: 12px;
        color: $-color-primary;
        float: right;
      }
    }
    .code {
      position: relative;
    }
    .w-pwd {
      line-height: 30px;
      font-size: 12px;
      color: $-color-primary;
      float: right;
    }
    .btn-login {
      padding: 10px;
      width: 100%;
    }
  }
}
</style>
