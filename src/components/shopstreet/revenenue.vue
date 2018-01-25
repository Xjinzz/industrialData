<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
              <!-- 引入../table-header，利用slot分发出去标题 -->
            <div slot="pagetitle">{{$store.state.pagename11}}</div>
        </tableHeader>
        
        <div style="width:90%;margin:0 auto;">
          <!-- 表哥信息   -->
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:800px;margin-top:20px;">
<!-- 表基本结构 -->
    <el-table-column 
      prop="name"
      label="费用名称" align="center"  height="600px">
    </el-table-column>
    <el-table-column
       prop="comeForm"
      label="费用来源" align="center">
    </el-table-column>
    <el-table-column
       prop="purpose"
      label="费用" align="center">
    </el-table-column>
    <el-table-column
       prop="money"
      label="金额" align="center">
    </el-table-column>
    <el-table-column
       prop="createTime"
      label="生成时间" align="center">
    </el-table-column>


  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
 :page-count="Math.ceil(homeData.length/15)" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'

import {mapGetters} from 'vuex'
import tableHeader from "../table-header";
export default {
      data() {
      return {
        tableData:[],
        start:0,
        end:15,
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.revenenue,
      }),
      ...mapGetters([
          'doneTodos',
      ]),




    },
    created () {
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    methods: {
   
        see(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '查看页面 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '租客姓名'),
            h('p', { style: 'color: #bbcffb' }, message.name),
          ])
        });
           
           
        },

       handleCurrentChange(val) {
        this.start=(`${val}`-1)*15;
        this.end=(`${val}`)*15;
        console.log(this.start+' '+this.end)
        this.tableData=this.homeData.slice(this.start,this.end);

      }
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
