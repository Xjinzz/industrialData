<template>
    <!-- <div>{{count}}</div> -->
    <div>
        
        <el-row>
            <el-col :span="2" :offset="0" style="text-align:center;color:#999;font-size:18px;line-height:80px;" class="pagetitle">商户管理</el-col>
        </el-row>
    
        <el-row :span="24">
            <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">客户总数</p>
                      <div class="homesnum">285个</div>
            </el-col>
             <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">在线客户总数</p>
                      <div class="homesnum">250个</div>
            </el-col>
             <el-col :span="8" style ="text-align:center">
                      <p class="contentTitle">停运客户总数</p>
                      <div class="homesnum">35个</div>
            </el-col>
        </el-row>
        <div style="width:98%;margin:0 auto;border-top:1px solid #ccc;">
       
            <el-table
    target="#mylist"
    :data="tableData" 
    
    :show-header="true"
    border
    style="width: 100%;height:670px;">

    <el-table-column
       prop="name"
      label="商户户名称" align="center">
    </el-table-column>
     <el-table-column
       prop="place"
      label="商户地址" align="center">
    </el-table-column>
    <el-table-column
       prop="starttime"
      label="起始时间" align="center">
    </el-table-column>
    <el-table-column
       prop="endtime"
      label="到期日期" align="center" width="280">
    </el-table-column>
    <el-table-column
       prop="surplustime"
      label="剩余时间" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="operation"
      label="状态"
      width="100" align="center">
      <template slot-scope="scope">
        在线

        
        
      </template>
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
export default {
    computed: mapState({
         homeData: state => state.merchant
    }),
      data() {
      return {
        activeIndex: 'all',
        tableData:[],
        middleData:[],
        cityname:'全部',
        homesnum:'32个',
        cityacreage:'总网点数（271个）',
        homesacreage:'13665㎡',
        lendednum:'在线网点（165个）',
        homeslended:'225㎡',
        notlendednum:'停运网点（6个)',
        homesnotlended:'13443㎡'

      };
    },
    methods: {
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
