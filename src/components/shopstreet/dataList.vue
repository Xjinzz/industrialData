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
      label="租客姓名" align="center">
    </el-table-column>
    <el-table-column
       prop="prace"
      label="地点" align="center">
    </el-table-column>
    <el-table-column
       prop="startTime"
      label="起始时间" align="center">
    </el-table-column>
    <el-table-column
       prop="endTime"
      label="到期时间" align="center">
    </el-table-column>
    <el-table-column
       prop="lastTime"
      label="剩余时间" align="center">
    </el-table-column>
      <el-table-column
       prop="tel"
      label="联系方式" align="center">
    </el-table-column>
    <el-table-column
       prop="cao"
      label="操作"
      align="center">
      <!-- 操作中是固定写死的内容 -->
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
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
         homeData: state => state.dataList,
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
