<template>
  <div class="regist-container">
    <header>
      <div class="header-box">
        <a class="site-logo" href="http://www.meituan.com">美团</a>
        <div class="login-block">
          <span class="tip">已有美团账号？</span>
          <router-link
            class="btn"
            to="/account/unitivelogin?service=www&amp;continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken"
          >登录</router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="sheet">
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
          <el-form-item label="手机号" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="短线动态码" prop="code">
            <el-input v-model="form.code"></el-input>
            <el-button size="mini" round @click="sendMsg">获取免费动态验证码</el-button>
            <span class="status">{{statusMsg}}</span>
          </el-form-item>
          <el-form-item label="创建密码" prop="pwd">
            <el-input v-model="form.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="cpwd">
            <el-input v-model="form.cpwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">同意协议并注册</el-button>
            <div class="error">{{error}}</div>
          </el-form-item>
          <el-form-item>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
          </el-form-item>
        </el-form>
      </div>
    </main>
    <footer>©meituan.com 京ICP证070791号 京公网安备11010502025545号</footer>
  </div>
</template>
<script>
import { callbackify } from 'util';
export default {
  name: 'Register',

  data() {
    return {
      form: {
        name: '',
        code: '',
        pwd: '',
        cpwd: ''
      },
      statusMsg: '',
      error: '',
      rules: {
        name: [{
          required: true, type: "number", message:'请输入正确的电话号码', trigger: 'blur'
        }],
        pwd: [{
          required: true, type: "string", message:'创建密码', trigger: 'blur'
        }],
        cpwd: [{
          required: true, type: "string", message:'确认密码', trigger: 'blur'
        }, {
          validator: (rule,value,callback) => {
            if(value === '') {
              callback(new Error('请再次输入密码'))
            }else if (value !== this.form.pwd ) {
             callback(new Error('两次密码不一致'))
            }else {
              callback()
            }
          },
          trigger: 'blur'
        }]
      }
    }
  },

  methods: {
    onSubmit() {

    },
    sendMsg() {

    }
  }
}
</script>

<style lang='scss' scoped>
@import "~common/scss/var";
.regist-container {
  color: $-color-text-main;
  header {
    min-width: 980px;
    border-bottom: 2px solid #2bb8aa;
    color: #666;
    .header-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;
      .site-logo {
        width: 75px;
        height: 36px;
        background-image: url("./logo.png");
        text-indent: -1000px;
        overflow: hidden;
      }
      .login-block {
        line-height: 36px;
        font-size: 14px;
        .tip {
          padding-right: 10px;
        }
        .btn {
          text-decoration: none;
          color: $-color-primary;
        }
      }
    }
  }
  main {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;

    .sheet {
      width: 400px;
    }
  }
  footer {
    font-size: 12px;
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
