<template>
    <!-- <div>{{count}}</div> -->
    <div>
        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#666666" open="all">
            <el-col :span="23" :offset="1" class="pagetitle">合同管理</el-col>
            <el-menu-item index="all" >全部</el-menu-item>
            <el-menu-item :index="todata|dataFormat|shengxiao">生效中合同</el-menu-item>
            <el-menu-item :index="todata|dataFormat|daoqi">已到期合同</el-menu-item>
        </el-menu>
        <el-row :span="24">
            <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">合同总计</p>
                      <div class="homesnum">371个</div>
            </el-col>
             <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">生效合同总计</p>
                      <div class="homesnum">329个</div>
            </el-col>
             <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">到期合同总计</p>
                      <div class="homesnum">42个</div>
            </el-col>
        </el-row>
        <div style="width:90%;margin:0 auto;">
       
            <el-table
    target="#mylist"
    :data="tableData"
    
    :show-header="true"
    border
    style="width: 100%;height:670px;border-top:1px solid #ccc;">
    <el-table-column 
      prop="num"
      label="合同编号" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="name"
      label="项目名称" align="center">
    </el-table-column>
    <el-table-column
       prop="number"
      label="工位编号" align="center">
    </el-table-column>
    <el-table-column
       prop="startdata"
      label="起始日期" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="enddata"
      label="合同到期日期" align="center" width="180">
    </el-table-column>
  <el-table-column
       prop="lasttime"
      label="到期时间" align="center">
      <template slot-scope="scope">
        
        <el-col type="text" size="small">{{timeend(scope.row.enddata)}}</el-col>

        
        
      </template>
    </el-table-column>
      <el-table-column
       prop="timeed"
      label="审核通过时间" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="operation"
      label="操作"
      width="100" align="center">
      <template slot-scope="scope">
        <el-button @click="open(scope.row)" type="text" size="small">详情</el-button>

        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
 :page-count="Math.ceil(middleData.length/10)" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
let myDate = new Date();
export default {
    computed: mapState({
         homeData: state => state.contractadmin
    }),
      data() {
      return {
        activeIndex: 'all',
        tableData:[],
        middleData:[],
        todata:myDate.toLocaleDateString(),
      };
    },
    filters:{
      dataFormat(value){
        return value.split('/').map(
          item =>{return item.length<2?'0'+item:item;
        }).join('').replace(new RegExp('/','g'),'');
      },
      shengxiao(value){
        
        return "生效"+value;
      },
      daoqi(val){
        return '过期'+val;
      },
    },
    methods: {
        // 选项卡
      handleSelect(key, keyPath) {
  
        if(key.includes('生效')){
           this.middleData=this.homeData.filter(item=>{
             
             if(this.timeend(item.enddata).includes('天')){
                  return true;
             }else{
               return false;
             }
                
            });
            this.handleCurrentChange(1);
        }else if(key.includes('过期')){

           this.middleData=this.homeData.filter(item=>{
             if(this.timeend(item.enddata).includes('过期')){
                  return true;
             }else{
               return false;
             }
                
            });
             this.handleCurrentChange(1);
        
        }else if(key.includes('all')){
         
          this.middleData=this.homeData;
            this.handleCurrentChange(1);
        }
      },
      timeend(val){
        let arrend = val.split('-').join('/');
        let arrtoday = myDate;
          let str = Math.floor((new Date(arrend).getTime() - arrtoday.getTime())/(24*3600*1000))
        return str<0?'过期':str+'天';
     },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*10;
        this.end=(`${val}`+1)*10;
        this.tableData=this.middleData.slice(this.start,this.end);
      },
      
    },
     created () {
       this.middleData=this.homeData;
        this.tableData=this.homeData.slice(this.start,this.end);
    },

    
    
}
</script>

<style scoped>
.el-menu--horizontal .el-menu-item{
    font-size:20px;
    line-height: 72px;
    margin-left:80px;
}
.pagetitle{
    font-size:18px;
    /* margin-bottom:30px; */
    line-height:50px;
}

  .list_title{
        font-size:18px;
        line-height:78px;
        font-weight: 800;

    }
    #table_title{
        font-size:16px;
        line-height:70px;
        text-align: center
    }
    #fenye{
        width:100%;
        background:#fff;
        text-align:center;
        line-height: 34px;
        padding-top:40px;
    }
.el-table__header-wrapper .el-table__header{
  border:1px solid #999;
}
.homesnum{
  width:160px;line-height:52px;background:#f8fbfe;color:#3384d5;font-size:26px;margin:0 auto;text-align:center;margin-bottom:30px;;
}
.contentTitle{
  font-size:20px;
  margin-top:20px;
  color:#999;
}
</style>
