<template>
  <div style="">
  <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">数据分析</div>
        </tableHeader>
   <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#666666" open="all">
            <el-menu-item index="1" >招商分析</el-menu-item>
            <el-menu-item index="2">租客分析</el-menu-item>
            <el-menu-item index="3">财务报表</el-menu-item>
        </el-menu>
    <el-row>
        <div id="chart" style="width:100%;height:500px;"></div>
    </el-row>
  </div>
</template>

<script>
import tableHeader from "../table-header";
import echarts from 'echarts'


 let option={

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
     legend:{
            show:true,
            bottom:30,
            right:250,
            orient:'vertical',
            data:[{name:'带款谈判',icon:'circle'},{name:'流失',icon:'circle'},{name:'初步交流',icon:'circle'},{name:'成交',icon:'circle'}],
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '68%',
        color:['#1598db','#41aa68','#f9e369','#feb867'],
        center: ['50%', '50%'],
        radius: ['40%', '70%'],
        clockwise: false,
        data: [{
            value: 46,
            name: '带款谈判'
        }, {
            value: 14,
            name: '流失'
        }, {
            value: 21,
            name: '初步交流'
        }, {
            value: 19,
            name: '成交'
        }],
        label: {
            normal: {
                textStyle: {
                    fontSize: 25,
                },
                formatter(value){
                    
                    return value.name+' '+value.value+'%'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
       
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ffffff',
                
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#00acee',
        '#52cdd5',
        '#79d9f1',
        '#a7e7ff',
        '#c8efff'
    ],
    backgroundColor: '#fff'
};



export default {
 components: {
        tableHeader,
    },
methods:{
     handleSelect(key, keyPath) {
        switch(key){
            case '1':this.chart();break;
            case '2':this.chart();break;
            case '3':this.chart();break;
        }
    },

    //需要多个图表的话  可以使用不同的函数进行设置
    chart(){
        let myChart = document.getElementById("chart")
        this.myChart = echarts.init(myChart)
        this.myChart.clear()
        this.myChart.setOption(option)
    }

  
   
},
 data(){
        return {
        }
    },
    mounted(){
      this.chart();
    }
}
</script>

<style scoped>
.el-menu--horizontal .el-menu-item{
    font-size:20px;
    line-height: 72px;
}
.pagetitle{
    font-size:18px;
    line-height:50px;
}
</style>
