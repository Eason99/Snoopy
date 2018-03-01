<template>
  <div class="layout" style="height: 100%">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu :active-name="name" theme="dark" width="auto" :open-names="names" @on-select="changeMenu">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <h1 style="display: inline-block">
          <a href="/">MyGraduation</a>
        </h1>
        <div style="display: inline-block; position: relative;top: -4px;left: 5px">
          <Input
            v-model="value"
            type="text"
            icon="ios-clock-outline"
            placeholder="请输入..."
            style="width: 200px"
            @on-enter="input"></Input>
          <Button type="ghost" shape="circle" icon="ios-search" @click="input"></Button>
        </div>
        <div class="bar-control">
          <Button type="primary" size="large" shape="circle" @click = "Login">登入</Button>
          <Button type="primary" size="large" shape="circle" @click="Registered">注册</Button>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card style="height: 100%">
          <div style="height: 100%">
            <div style="height: 1px;background: #dddddd"></div>
            <!-- 路由开始 -->
            <router-view></router-view>
            <!-- 路由结束 -->
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        names: ["1"],
        name: "1-1",
        value: ''
      }
    },
    methods: {
      //函数绑定 设置路由 控制页面跳转
      changeMenu: function (value) {
        //console.log(value)
        switch (value) {
          case "1-1":
            return this.$router.push({name: 'Page1'});
          case "1-2":
            return this.$router.push({name: 'Page2'});
          case "1-3":
            return this.$router.push({name: 'Page3'});
          case "2-1":
            return this.$router.push({name: 'Page4'});
          case "2-2":
            return this.$router.push({name: 'Page5'});
          case "3-1":
            return this.$router.push({name: 'Page6'});
          case "3-2":
            return this.$router.push({name: 'Page7'});
          default:
            return this.$router.push({path: '/'});
            break;
        }
      },
      input: function () {
        console.log('666')
      },
      Login:function () {
        console.log('666')
        this.$router.push({path:'/sign_in'})
      },
      Registered:function () {
        console.log('666')
        this.$router.push({path:'/sign_in'})
      }
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .bar-control {
    float: right;
  }

</style>
