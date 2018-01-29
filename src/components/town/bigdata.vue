<template>
  <div style ="background:#f3f3f3">
     <convencmp mystyle = "height:72.5px" myclass="titleTagClass" :lis ="titlearr"/>
     <el-row type = "flex" justify="space-around"  style = "background:#f3f3f3;margin-top:20px;height:860px;">
         <el-col :span = "11" style = "background:#fff;height:860px">
            <el-tabs v-model="activeName" @tab-click = "changefrom()">
                <el-tab-pane label=" " index = "1" name ="">
                            
                    </el-tab-pane>
                    <el-tab-pane label="人口管理" index = "2" name ="person">
                               
                    </el-tab-pane>
                    <el-tab-pane label="户籍管理" index = "3" name ="home">
                        
                    </el-tab-pane>
                     <el-tab-pane label="家庭管理" index = "4" name ="family">
                         
                    </el-tab-pane>
                </el-tabs>
     <IEcharts
                                    :option="barleft"
                                    @ready="onReady"
                                    style ="height:800px;width:730px;" :loading= "loaded" ref = "barleft"/>
         </el-col>
         <el-col :span = "11" style = "background:#fff;height:860px;">
               <el-tabs v-model="active2Name">
                <el-tab-pane label=" " index = "1" name ="">
                            
                    </el-tab-pane>
                    <el-tab-pane label="居住管理" index = "2" name ="live">
                              
                    </el-tab-pane>
                    <el-tab-pane label="小区管理" index = "3" name ="department">
                            
                    </el-tab-pane>
                     <el-tab-pane label="楼盘管理" index = "4" name ="hotel">
                             
                    </el-tab-pane>
                </el-tabs>
                <IEcharts
                                    :option="barright"
                                    @ready="onReady"
                                    style ="height:800px;width:730px;" :loading= "loaded"/>
         </el-col>
     </el-row>
  </div>
</template>
    
<script>
 import IEcharts from 'vue-echarts-v3'
import convencmp from './convenlistcmp'
var option = {
            tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['人口', '小区','工作站','暂住人口','户籍人口']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis:  {
        type: 'value',
        interval:1000,
        splitLine:{
            show:true,
            interval:500,
        }
    },
    yAxis: {
        type: 'category',
        data: ['大兴区','西城区','朝阳区','丰台区','海淀区','顺义区','昌平区']
    },
    series: [
        {
            name: '人口',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    
                }
            },
            data: [1302, 1312, 1398, 1312, 1300, 1142, 983],
            barWidth:20,
        },
        {
            name: '小区',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                 
                }
            },
            data: [100, 305, 305, 286, 320,313, 290]
        },
        {
            name: '工作站',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
              
                }
            },
            data: [310,330,300,330, 300, 289, 289]
        },
        {
            name: '暂住人口',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                   
                }
            },
            data: [410, 330,200,320,210,270,280]
        },
        {
            name: '户籍人口',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
            
                }
            },
            data: [1271,1330,1290,890,901,1010,980]
        }
    ],
    color:['#2fa7ef','#f8cb53',  '#fa8081', '#7c85f9','#6bea56'],
    
        }






var option2 = {
            tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['出租房', '已租房','空置房']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis:  {
        type: 'value',
        interval:1000,
        splitLine:{
            show:true,
            interval:500,
        }
    },
    yAxis: {
        type: 'category',
        data: ['大兴区','西城区','朝阳区','丰台区','海淀区','顺义区','昌平区']
    },
    series: [
        {
            name: '出租房',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    
                }
            },
            data: [1320, 1330, 1398, 1322, 1310, 1152, 993],
            barWidth:20,
        },
        {
            name: '已租房',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                 
                }
            },
            data: [101, 306, 315, 386, 310,303, 280]
        },
        {
            name: '空置房',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
              
                }
            },
            data: [330,320,310,320, 350, 270, 279]
        },
      
    ],
    color:['#2fa7ef','#f8cb53',  '#fa8081'],
    
        }







export default {
    data(){
        return {
            titlearr:[
                {
                    title:'过户',
                    style:"background-position:42.7% 0%"
                },{
                    title:'销户',
                    style:"background-position:100% 0%"
                },{
                    title:'增容',
                    style:"background-position:85.8% 0%"
                }
            ],
            activeName:"person",
            ins: null,
            echarts: null,
            barleft: {},
            barright:{},
            loaded:true,
            active2Name:"department"
        }
    },
    mounted(){
        setTimeout(() => {
            this.loaded = false
        }, 1500);
    },
    methods:{
changefrom(){
   this.$refs.barleft.clear();
    this.barleft = {};
     this.barleft = option;
     console.log(this.barleft);
    
},
      onReady (instance, echarts) {
          let that = this;
          //获取echarts
        that.ins = instance
        //获取当前图表中的数据
        that.echarts = echarts
       
        
        //option
        that.barleft = option
        that.barright = option2
    },
    },

    components:{
        convencmp,IEcharts
    }

}
</script>

<style scoped>

</style>
