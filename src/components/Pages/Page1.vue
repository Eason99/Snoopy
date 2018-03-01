<template>
  <div class="hello" style="height: 100%">
    <h1 class="title">{{ msg }}</h1>
    <Row style="height: 100%">
      <Col span="8" push="16" style="background: yellow; height: 100%">
        <div class="tea">
          666
        </div>
      </Col>
      <Col span="16" pull="8" style="background: goldenrod;height: 100%">
        <div class="tea">
          <img src="../../assets/img/1.jpg" height="351" width="500"/>
        </div>

      </Col>
    </Row>
    <div style="width: 100%;text-align: center">
      <!--<Page class="page" :total="100" @on-change="getPage"></Page>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Option1',
    data() {
      return {
        msg: 'Welcome to Option1'
      }
    },
    methods: {
      getPage: function (page) {
        console.log(page)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .title {
    text-align: center;
    vertical-align: middle;
  }

  .page {
    margin-top: 10px;
  }
  .tea{
    background: whitesmoke;
    margin: 5px;
    height: 100%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
