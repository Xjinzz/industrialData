<template>
    <div id="contentInnerTop" style ="background:#f5f5f5">
        <!-- 首页内容 -->
        <div id="content_top">
            <el-row :gutter="24" >

  <el-col :span="5" :offset="1">
      <div class="grid-content bg-white">
        <center class="top_title">项目总数</center>
        <div class="top_content"><span>{{num1}}</span>个</div>
    </div>
  </el-col>
  <el-col :span="5" :offset="3"><div class="grid-content bg-white">
        <center class="top_title">投资总金额</center>
        <div class="top_content"><span>{{num2}}</span>万元</div>
      </div></el-col>
  <el-col :span="5" :offset="3"><div class="grid-content bg-white">
      
      <center class="top_title">总收益额</center>
        <div class="top_content"><span>{{num3}}</span>万元</div>
      
      
      </div></el-col>
</el-row>

        </div>
        <div id="mychart">

        </div>
        
    </div>
</template>
<script>


  import echarts from 'echarts'
 const myoption = {
     title:{
         text:'项目统计图－PPP项目',
         textStyle:{
             color:'#666',
             lineHeight:'30px',
             fontSize:'18',
             fontFamily:'Apple LiGothic Medium,SimHei',
             
         },
         left:20,
         top:20,
     },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
     legend:{
            show:true,
            bottom:30,
            right:250,
            orient:'vertical',
            data:[{name:'未投资项目',icon:'circle'},{name:'已投资项目',icon:'circle'}],
    },
    series: [{
        name: 'ppp项目-',
        type: 'pie',
        radius: '68%',
        color:['#1598db','#feb867'],
        center: ['50%', '50%'],
        radius: ['40%', '70%'],
        clockwise: false,
        data: [{
            value: 25,
            name: '未投资项目'
        }, {
            value: 45,
            name: '已投资项目'
        }],
        label: {
            normal: {
                textStyle: {
                    
                    fontSize: 25,
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
export default{
    name:'index',
    data(){
        return{
            num1:304,
            num2:4193,
            num3:8451
        }
    },
    mounted(){
        let mychartDOM = document.getElementById('mychart');
        this.mychart = echarts.init(mychartDOM);
        this.mychart.setOption(myoption);
    }
}

</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    margin-top:20px;

  }
  .bg-white {
    background: #fff;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 148px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .top_title{
      position:relative;
      top:24px;
      color:#999;

  }
  .top_content{
      position:relative;
      top:40px;
      font-size:16px;
      text-align:center;

  }
  .top_content span{
      
          font-size:30px;
          font-weight:800;

      
  }
#mychart{
        width:1680px;
        margin:0 auto;
        background:#fff;
        height:459px;
}
</style>