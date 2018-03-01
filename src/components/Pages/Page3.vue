<template>
  <div class="hello" id="chart" :style="{width:'800px',height:'600px'}">
    <h1 class="title">{{ msg }}</h1>

  </div>
</template>

<script>
  export default {
    name: 'Option3',
    data() {
      return {
        msg: 'Welcome to Option3'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('chart'));
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          series: [
            {
              name: '中国',
              type: 'map',
              mapType: 'china',
              selectedMode: 'multiple',
              label: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {name: '辽宁', selected: true}
              ]
            }
          ]
        };
        myChart.setOption(option);
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
