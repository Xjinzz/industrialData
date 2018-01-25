<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename}}</div>
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
      label="身份证" align="center" width="230">
    </el-table-column>
    <el-table-column
       prop="tel"
      label="手机号" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="homeNum"
      label="房间号" align="center" width="100">
    </el-table-column>
    <el-table-column
       prop="intime"
      label="入住时间" align="center" width="230">
    </el-table-column>
        <el-table-column
       prop="outtime"
      label="离开时间" align="center"  width="230">
    </el-table-column>
        <el-table-column
       prop="meney"
      label="已交押金" align="center">
    </el-table-column>
       </el-table-column>
        <el-table-column
       prop="shoule"
      label="应退押金" align="center">
    </el-table-column>

    <el-table-column
       prop="homeNum"
      label="操作"
      width="200" align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
        <el-button type="text" :plain="true" size="small" @click="tolong">延期</el-button>
        <el-button type="text" :plain="true" size="small"  @click="exit((scope.row))">退房</el-button>
        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
   :page-count="Math.ceil(homeData.length/12)" @current-change="handleCurrentChange">
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
    computed: {
      ...mapState({
         homeData: state => state.live
    }),
      tableData(){
       return this.homeData.slice(this.start,this.end);
      }
    },
      data() {
      return {
        activeIndex: 'all',
        start : 0 ,
        end : 13,
      };
    },
    methods: {
        see(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '房间信息 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '姓名：'),
            h('p', { style: 'color: #bbcffb' }, message.name),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '身份证号码：'),
            h('p', { style: 'color: #bbcffb' }, message.peo),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '手机号'),
            h('p', { style: 'color: #bbcffb' }, message.tel),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '房间号'),
            h('p', { style: 'color: #bbcffb' },message.homeNum),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '入住时间'),
            h('p', { style: 'color: #bbcffb' },message.intime),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '离开时间：'),
            h('p', { style: 'color: #bbcffb' }, message.outtime),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '已交押金'),
            h('p', { style: 'color: #bbcffb' }, message.meney),
             h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '应退押金'),
            h('p', { style: 'color: #bbcffb' }, message.shoule),
            
          ])
        });
           
           
        },
        tolong(){
           this.$message({
          showClose: true,
          message: '延期成功',
          type: 'success',
           center:true
        });
        },
        exit(money){
          let exithome = new Promise((resolve,reject)=>{
            this.$store.commit('hotelexit',money);
          })
          exithome.then(()=>{
            this.$message({
              showClose: true,
              message: '退房成功,找您的押金为：'+money.shoule+'元',
              type: 'success',
              center:true
            });
          })
          
          
        },
        handleClick(row) {
        console.log(row);
      },
      openFullScreen() {
     
      },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`+1)*13;
      }
    },
     created () {        
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
