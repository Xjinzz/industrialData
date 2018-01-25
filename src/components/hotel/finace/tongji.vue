<template>
  <el-row>
       <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename5}}</div>
        </tableHeader>
        <el-row style="height:882px;background:#fff;margin-top:20px;">
            <el-col :span="23" :offset="0">
                <el-row style="height:20px;"></el-row>
                <el-col :offset="1" :span="5" class="bg-f5">
                    <el-row style="height:20px;"></el-row>
                    <el-row class="page-lider-titles">
                        本月账单
                    </el-row>
                    <el-row class="page-lider-content">
                        <p>
                            入账<span>3891</span>万元 出账<span>1203</span>万元
                        </p>
                    </el-row>
                </el-col>
                 <el-col :offset="1" :span="5" class="bg-f5">
                    <el-row style="height:20px;"></el-row>
                    <el-row class="page-lider-titles">
                        季度账单
                    </el-row>
                    <el-row class="page-lider-content">
                        <p>
                            入账<span>9035</span>万元 出账<span>3810</span>万元
                        </p>
                    </el-row>
                </el-col>
                 <el-col :offset="1" :span="5" class="bg-f5">
                    <el-row style="height:20px;"></el-row>
                    <el-row class="page-lider-titles">
                        年度账单
                    </el-row>
                    <el-row class="page-lider-content">
                        <p>
                            入账<span>12013</span>万元 出账<span>5045</span>万元
                        </p>
                    </el-row>
                </el-col>
                 <el-col :offset="1" :span="5" class="bg-f5">
                    <el-row style="height:20px;"></el-row>
                    <el-row class="page-lider-titles">
                        总账单
                    </el-row>
                    <el-row class="page-lider-content">
                        <p>
                            入账<span>24140</span>万元 出账<span>9381</span>万元
                        </p>
                    </el-row>
                </el-col>
                  
            </el-col>
             <el-row></el-row>

        <el-tabs v-model="activeName" @tab-click="handleClick" style="width:90%;margin:20px auto">
            <el-tab-pane label="年收益表" name="first">
                <div id="year"></div>
            </el-tab-pane>
            <el-tab-pane label="季度收益表" name="second">
                <div id="jidu"></div>
            </el-tab-pane>
            <el-tab-pane label="月收益表" name="third">
                <div id="month"></div>
            </el-tab-pane>
        </el-tabs>
        
        </el-row>
     
      
        
  </el-row>
</template>

<script>
import tableHeader  from '../../table-header'
import echarts from 'echarts'

const option1 = {
    title: {
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        textStyle: {
            color: '#999',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['收入','支出'],
        show:true,
        top:20,
    },
    xAxis: {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月',"12月"],
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#eee']
            },
           
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            },
            show:false,
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        nameTextStyle:{
           color:'#333',
        },
        splitNumber:3,
    },
    series: [ {
        name: '收入',
        type: 'line',
        
        symbol: 'circle',
        symbolSize: 6,
        data: ['300000', '600000', '250000', '300000', '280000', '150000', '320000', '380000', '400000', '300000', '250000', '300000'],
        areaStyle: {
            normal: {
                color:'rgba(254,184,103,0.5)',
            }
        },
        itemStyle: {
            normal: {
            
                 color: '#fff',
                borderColor:'#ffead1',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#feb867'
            }
        },
    },{
        name: '支出',
        type: 'line',
        symbolSize:5,
        symbol: 'circle',
        symbolSize: 6,
         data: ['120000', '300000', '50000', '100000', '130000', '100000', '120000', '180000', '220000', '200000', '50000', '200000'],
        areaStyle: {
            normal: {
                color:'rgba(172,222,248,0.7)'
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor:'#e6f5fd',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#42abe0'
            }
        },
    },]
};

const option2 = {
    title: {
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        textStyle: {
            color: '#999',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['收入','支出'],
        show:true,
        top:20,
    },
    xAxis: {
        type: 'category',
        data: ['1月','2月','3月'],
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#eee']
            },
           
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            },
            show:false,
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        nameTextStyle:{
           color:'#333',
        },
        splitNumber:3,
    },
    series: [ {
        name: '收入',
        type: 'line',
        
        symbol: 'circle',
        symbolSize: 6,
        data: ['80000', '120000', '50000'],
        areaStyle: {
            normal: {
                color:'rgba(254,184,103,0.5)',
            }
        },
        itemStyle: {
            normal: {
            
                 color: '#fff',
                borderColor:'#ffead1',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#feb867'
            }
        },
    },{
        name: '支出',
        type: 'line',
        symbolSize:5,
        symbol: 'circle',
        symbolSize: 6,
         data: ['30000', '70000', '10000'],
        areaStyle: {
            normal: {
                color:'rgba(172,222,248,0.7)'
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor:'#e6f5fd',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#42abe0'
            }
        },
    },]
};

const option3 = {
    title: {
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        textStyle: {
            color: '#999',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['收入','支出'],
        show:true,
        top:20,
    },
    xAxis: {
        type: 'category',
        data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日',"12日"],
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#eee']
            },
           
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            },
            show:false,
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        nameTextStyle:{
           color:'#333',
        },
        splitNumber:3,
    },
    series: [ {
        name: '收入',
        type: 'line',
        
        symbol: 'circle',
        symbolSize: 6,
        data: ['30000', '60000', '25000', '30000', '28000', '15000', '32000', '38000', '40000', '30000', '25000', '30000'],
        areaStyle: {
            normal: {
                color:'rgba(254,184,103,0.5)',
            }
        },
        itemStyle: {
            normal: {
            
                 color: '#fff',
                borderColor:'#ffead1',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#feb867'
            }
        },
    },{
        name: '支出',
        type: 'line',
        symbolSize:5,
        symbol: 'circle',
        symbolSize: 6,
         data: ['12000', '30000', '5000', '10000', '13000', '10000', '12000', '18000', '22000', '20000', '5000', '20000'],
        areaStyle: {
            normal: {
                color:'rgba(172,222,248,0.7)'
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor:'#e6f5fd',
                borderWidth:3,
                width:10,
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                color:'#42abe0'
            }
        },
    },]
};
export default {
    components:{
        tableHeader,
    },
        data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
         
        switch (tab.paneName) {

            case 'first':
             
                let myChart = document.getElementById('year');
                this.myChart2 = echarts.init(myChart);
                this.myChart2.clear();
                this.myChart2.setOption(option1)
                break;
            case 'second':
             let myChart2 = document.getElementById('jidu');
             this.myChart = echarts.init(myChart2)
             this.myChart.clear();
                this.myChart.setOption(option2)
            break;
            case 'third':
                let myChart3 = document.getElementById('month');
                this.myChart3 = echarts.init(myChart3)
                this.myChart3.clear();
                this.myChart3.setOption(option3)
                break;
            default:
                this.myChart2 = echarts.init(document.getElementById('year'));
                this.myChart2.clear();
                this.myChart2.setOption(option1)
                break;
            break;
        }
        
      }
    },
    mounted(){
        var ntab = {
            poneName:'first'
        }
        this.handleClick(ntab);
    }

    
}
</script>

<style scoped>
    .bg-f5{
        background:#f5f5f5;
    }
    .page-lider-titles{
        text-align: center;
        color:#999;
        font-size:16px;
        line-height: 30px;
    }
    .page-lider-content p{
        font-size: 16px;
        font-family: 'Microsoft YaHei';
        line-height:80px;
        color:#999;
        text-align: center;

    }
       .page-lider-content p span{
           color:#333;
           font-size:24px;
           font-weight: 800;
           padding:0px 10px;
           

       } 

        .nav{
            font-size:16px;
             display: inline;
            padding:10px;
            margin-top:30px;
           
        }
        #year,#jidu,#month{
            width:1632px;
            margin:0 auto;
            height: 590px;
        }
</style>
