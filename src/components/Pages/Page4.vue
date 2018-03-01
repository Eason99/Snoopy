<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Table ref="currentRowTable" highlight-row :columns="Columns" :data="Data"></Table>
    <Page class="page" :total="dataCount" :page-size="pageSize" show-total @on-change="getPage"></Page>
    <Button type="info" size="large" shape="circle" @click="ok">CREATE</Button>
  </div>
</template>
<script>
  //获取当前日期
  let myDate = new Date();
  let Y = myDate.getFullYear() + '-';
  let M = (myDate.getMonth() + 1 < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
  let D = (myDate.getDate() < 10 ? '0' + (myDate.getDate()) : myDate.getDate()) + ' ';
  let alpha = Y + M + D;

  let arr = {
    "list": [
      {
        "date": alpha,
        "TASK1": "asd",
        "TASK2": "asd",
        "TASK3": "asd",
        "TASK4": "asd",
        "TASK5": "asd",
        "TASK6": "asd",
        "TASK7": "asd"
      },
      {
        "date": alpha,
        "TASK1": "asd",
        "TASK2": "asd",
        "TASK3": "asd",
        "TASK4": "asd",
        "TASK5": "asd",
        "TASK6": "asd",
        "TASK7": "asd"
      },
      {
        "date": alpha,
        "TASK1": "asd",
        "TASK2": "asd",
        "TASK3": "asd",
        "TASK4": "asd",
        "TASK5": "asd",
        "TASK6": "asd",
        "TASK7": "asd"
      },
      {
        "date": alpha,
        "TASK1": "asd",
        "TASK2": "asd",
        "TASK3": "asd",
        "TASK4": "asd",
        "TASK5": "asd",
        "TASK6": "asd",
        "TASK7": "asd"
      },
      {
        "date": alpha,
        "TASK1": "asd",
        "TASK2": "asd",
        "TASK3": "asd",
        "TASK4": "asd",
        "TASK5": "asd",
        "TASK6": "asd",
        "TASK7": "asd"
      }
    ]
  };
  let myList = {
    "date": alpha,
    "TASK1": "asd",
    "TASK2": "asd",
    "TASK3": "asd",
    "TASK4": "asd",
    "TASK5": "asd",
    "TASK6": "asd",
    "TASK7": "asd"
  };

  export default {
    name: 'Option1',
    data() {
      return {
        msg: 'Welcome to Option1',
        tempList: [],
        dataCount: 0,
        pageSize: 10,
        Columns: [
          {
            title: '日期',
            key: 'date'
          },
          {
            title: 'A',
            key: 'TASK1'
          },
          {
            title: 'B',
            key: 'TASK2'
          },
          {
            title: 'C',
            key: 'TASK3'
          },
          {
            title: 'D',
            key: 'TASK4'
          },
          {
            title: 'E',
            key: 'TASK5'
          },
          {
            title: 'F',
            key: 'TASK6'
          },
          {
            title: 'G',
            key: 'TASK7'
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ])
            }
          }
        ],
        Data: []
      }
    },
    methods: {
      getList() {
        //获取所有数据
//        this.$http.get('http//localhost:3000/list').then(function (data) {
//          let list = data.body;
//          this.tempList = list;
//          this.dataCount = list.length;
//          if (this.dataCount < this.pageSize) {
//            this.Data = this.tempList;
//          } else {
//            this.Data = this.tempList.slice(0, this.pageSize)
//          }
//        });
        this.tempList = arr.list;
        this.dataCount = arr.list.length;
        //处理数据
        if (this.dataCount < this.pageSize) {
          this.Data = this.tempList;
        } else {
          this.Data = this.tempList.slice(0, this.pageSize)
        }
      },
      //分页
      getPage(index) {
        var start = (index - 1) * this.pageSize;
        var end = index * this.pageSize;
        this.Data = this.tempList.slice(start, end);
      },
      //新增一条数据
      ok() {
        arr.list.push(myList);
      },
//      request(){
//        this.$http.get('http://localhost:3000/profile').then(function (data) {
//          console.log(data.body)
//        })
//      },
      //View 按钮
      show(index) {
        this.$Modal.info({
          title: 'Detail Info',
          content: `TASK:${this.Data[index].TASK3}`
        })
      },
      //Delete 按钮
      remove(index) {
        this.Data.splice(index, 1)
      }
    },
    //钩子
    created() {
      this.getList();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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

  .page {
    text-align: center;
    margin-top: 10px;
  }
</style>
