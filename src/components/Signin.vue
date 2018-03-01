<template>
  <div>
    <!--<Tabs size="small" style="text-align: center">-->
      <!--<TabPane label="登陆">-->
        <!--<div class="login-tab" v-show="showLogin">-->
          <!--<h3>登陆</h3>-->
          <!--<Input class="input-group" type="text" size="large" v-model="username1"/>-->
          <!--<br>-->
          <!--<Input class="input-group" type="text" size="large" v-model="password1"/>-->
          <!--<br>-->
          <!--<Button v-on:click="submitOne">OK</Button>-->
          <!--<Button v-on:click="cancelOne">Cancel</Button>-->
        <!--</div>-->
      <!--</TabPane>-->
      <!--<TabPane label="注册">-->
        <!--<div class="registered-tab">-->
          <!--<h3>注册</h3>-->
          <!--<Input class="input-group" type="text" size="large" v-model="username2"/>-->
          <!--<br>-->
          <!--<Input class="input-group" type="text" size="large" v-model="password2"/>-->
          <!--<br>-->
          <!--<Button v-on:click="submitTwo">OK</Button>-->
          <!--<Button v-on:click="cancelTwo">Cancel</Button>-->
        <!--</div>-->
      <!--</TabPane>-->
    <!--</Tabs>-->

    <div class="tab-header">
    <ul>
    <li><a href="#sign_in">Sign_In</a></li>
    <li><a href="#login">LogIn</a></li>
    </ul>
    </div>
    <div class="tab-content">
      <div id="sign_in">
        <Input class="input-group" type="text" size="large" v-model="username2"/>
        <br>
        <Input class="input-group" type="password" size="large" v-model="password2"/>
        <br>
        <Button v-on:click="submitTwo">OK</Button>
        <Button v-on:click="cancelTwo">Cancel</Button>
      </div>
      <div id="login">
        <Input class="input-group" type="text" size="large" v-model="username1"/>
        <br>
        <Input class="input-group" type="password" size="large" v-model="password1"/>
        <br>
        <Button v-on:click="submitOne">OK</Button>
        <Button v-on:click="cancelOne">Cancel</Button>
      </div>
    </div>
  </div>
</template>
<script>
  let dataArr = {
    "datas": [
      {
        "username": "admin",
        "password": "123456"
      }
    ]
  };
  export default {
    data() {
      return {
        showLogin: 'true',
        username1: '',
        password1: '',
        username2: '',
        password2: ''
      }
    },
    methods: {
      submitOne: function () {
        var loginArr = [];
        loginArr.username1 = dataArr.datas[0].username;
        loginArr.password1 = dataArr.datas[0].password;
        if (this.username1 === loginArr.username1 && this.password1 === loginArr.password1) {
          this.$router.push({name: 'HelloWorld'});
        } else {
          return
        }
      },
      cancelOne: function () {
        return
      },
      submitTwo: function () {

      },
      cancelTwo: function () {
        return
      }
    }

  }
</script>
<style>
  .login-tab {
    text-align: center;
  }

  .registered-tab {
    text-align: center;
  }

  .input-group {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    padding: 10px;
  }
</style>
