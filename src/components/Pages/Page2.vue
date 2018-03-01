<template>
  <div class="hello" style="height: 100%">
    <h1 class="title">{{ msg }}</h1>
    <Table border ref="selection" :columns="Columns" :data="listData"></Table>
    <!--<Button @click="handleSelectAll(true)">全选</Button>-->
    <!--<Button @click="handleSelectAll(false)">取消</Button>-->
    <Page class="page" :total="dataCount" :page-size="pageSize" show-total @on-change="getPage"></Page>
  </div>
</template>

<script>
  let tableData = {
    "datas": [
      {
        "username": "Tom",
        "time": "2018-01-17"
      },
      {
        "username": "Jerry",
        "time": "2018-01-17"
      },
      {
        "username": "Tom",
        "time": "2018-01-17"
      }, {
        "username": "Tom",
        "time": "2018-01-17"
      }, {
        "username": "Tom",
        "time": "2018-01-17"
      },
      {
        "username": "Tom",
        "time": "2018-01-17"
      },
      {
        "username": "Tom",
        "time": "2018-01-17"
      },
      {
        "username": "Tom",
        "time": "2018-01-17"
      }, {
        "username": "Tom",
        "time": "2018-01-18"
      }, {
        "username": "Tom",
        "time": "2018-01-18"
      }, {
        "username": "Tom",
        "time": "2018-01-18"
      }, {
        "username": "Amy",
        "time": "2018-01-18"
      }, {
        "username": "End",
        "time": "2018-01-18"
      }
    ]

  };

  export default {
    name: 'Option2',
    data() {
      return {
        msg: 'Welcome to Option2',
        ajaxData: [],
        pageSize: 10,
        dataCount: 0,
        Columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '用户',
            key: 'username'
          },
          {
            title: '时间',
            key: 'time'
          }
        ],
        listData: []
      }
    },
    methods: {
      // 获取历史记录信息
      handleListApproveHistory() {

        // 保存取到的所有数据
        this.ajaxData = tableData.datas;
        this.dataCount = tableData.datas.length;
        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
        if (tableData.datas.length < this.pageSize) {
          this.listData = this.ajaxData;
        } else {
          this.listData = this.ajaxData.slice(0, this.pageSize);
        }
      },
      getPage: function (index) {
        var start = (index - 1) * this.pageSize;
        var end = index * this.pageSize;
        this.listData = this.ajaxData.slice(start, end);
      },
//      //全选
//      handleSelectAll(status) {
//        this.$refs.selection.selectAll(status);
//      }
    }
    ,
    created() {
      this.handleListApproveHistory();
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
  }

  .page {
    margin-top: 10px;
    width: 100%;
    text-align: center;
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
