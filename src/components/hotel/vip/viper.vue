<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename3}}</div>
        </tableHeader>
        
        <div style="width:98%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:800px;margin-top:20px;">
    <el-table-column 
      prop="name"
      label="姓名" align="center" width="130">
    </el-table-column>
    <el-table-column
       prop="peo"
      label="身份证" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="tel"
      label="手机号" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="viptype"
      label="会员类型" align="center" width="100">
    </el-table-column>
    <el-table-column
       prop="intime"
      label="开通时间" align="center" width="250">
    </el-table-column>
        <el-table-column
       prop="zhe"
      label="会员折扣" align="center"  width="120">
    </el-table-column>
        <el-table-column
       prop="meney"
      label="累计消费" align="center">
    </el-table-column>
     
        <el-table-column
       prop="homeNum"
      label="状态"
      width="150" align="center">
      <template slot-scope="scope">
        <div style="color:#409EFF;">启用</div>

        
        
      </template>
    </el-table-column>

    <el-table-column
       prop="homeNum"
      label="操作"
      width="250" align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
        <el-button type="text" :plain="true" size="small" @click="tolong">编辑</el-button>
        <el-button type="text" :plain="true" size="small"  @click="exit((scope.row))">删除</el-button>
        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :total="homeData.length" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import tableHeader from "../../table-header";
export default {
    computed: mapState({
         homeData: state => state.viper
    }),
      data() {
      return {
        activeIndex: 'all',
        tableData:[],
      };
    },
    methods: {
        see(message){
         
       
      
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '会员信息 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '姓名：'),
            h('p', { style: 'color: #bbcffb' }, message.name),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '身份证号码：'),
            h('p', { style: 'color: #bbcffb' }, message.peo),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '手机号：'),
            h('p', { style: 'color: #bbcffb' }, message.tel),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '会员类型：'),
            h('p', { style: 'color: #bbcffb' },message.viptype),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '开通时间：'),
            h('p', { style: 'color: #bbcffb' },message.intime),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '会员折扣：'),
            h('p', { style: 'color: #bbcffb' }, message.zhe),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '累计消费：'),
            h('p', { style: 'color: #bbcffb' }, message.meney),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '状态：启用'),

            
          ])
        });
           
           
        },
        tolong(){
           this.$message({
          showClose: true,
          message: '编辑成功',
          type: 'success',
           center:true
        });
        },
        exit(money){
            this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success',
          center:true
        });
          
        },
        handleClick(row) {
        console.log(row);
      },
      openFullScreen() {
     
      },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`+1)*13;

        this.tableData=this.homeData.slice(this.start,this.end);

      
      }
    },
     created () {

        this.tableData=this.homeData.slice(this.start,this.end);
        
    },
    components: {
        tableHeader,
    }
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

</style>
