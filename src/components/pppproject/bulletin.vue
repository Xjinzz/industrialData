<template>
    <div style="background:#eee;">
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">公告摘要</div>
        </tableHeader>
        
        <div style="width:98%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:800px;margin-top:20px;" :row-style ="rowstyle">
    <el-table-column 
      prop="projectName"
      label="项目名称" align="center" width="250px">
    </el-table-column>
    <el-table-column
       prop="bidding"
      label="招标方式" align="center">
    </el-table-column>
    <el-table-column
       prop="purchaser"
      label="采购人" align="center">
    </el-table-column>
    <el-table-column
       prop="endtime"
      label="截止时间" align="center">
    </el-table-column>
    <el-table-column
       prop="place"
      label="所在地区" align="center">
    </el-table-column>
    <el-table-column
       prop="keyword"
      label="关键词" align="center">
    </el-table-column>

    <el-table-column
       prop="st"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.$index)">查看内容</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :page-count="Math.ceil(homeData.length/10)" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'

import tableHeader from "../table-header";
export default {
      data() {
      return {
        start : 0,
        end : 10,
        page : 1,  
        rowstyle:()=>{
            return {
                color:'#333',
                lineHeight:'62.5px',
                height:'62.5px',
            }
        }
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.pppProject.bulletin,
      }),
      tableData(){
        return this.homeData.slice(this.start,this.end)
      }
    },
    created () {
    },
    methods: {
        see(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '内容是 '),
            h('p', { style: 'color: #bbcffb' }, this.homeData[(this.page-1)*10+message].content),
          ])
        });  
        },
       handleCurrentChange(val) {
        this.page = val ;
        this.start=(`${val}`-1)*10;
        this.end=(parseInt(`${val}`))*10;
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
