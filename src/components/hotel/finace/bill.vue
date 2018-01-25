<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

        <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename4}}</div>
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
      label="流水项目" align="center" width="230">
    </el-table-column>
    <el-table-column
       prop="func"
      label="付款方式" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="homenum"
      label="房间号" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="intime"
      label="开通时间" align="center">
    </el-table-column>
    <el-table-column
       prop="money"
      label="累计消费" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="homeNum"
      label="操作"
      width="250" align="center">
      <template slot-scope="scope">
        <el-button type="text" size="small" :plain="true" @click="see(scope.row)">查看</el-button>
        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
   :page-count="Math.ceil(tableData.length/12)" @current-change="handleCurrentChange">
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
         homeData: state => state.bill
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
          message: h('p', null, [
            h('span', null, '消费状态:'),
            h('p', { style: 'color: teal' }, message.sescss)
          ])
        });




        },
        handleClick(row) {
        console.log(row);
      },
      openFullScreen() {
     
      },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*12;
        this.end=(`${val}`+1)*12;

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
