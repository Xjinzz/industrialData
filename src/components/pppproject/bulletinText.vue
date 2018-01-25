<template>
    <div style="background:#eee;">
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">公告正文</div>
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
      prop="procurement"
      label="采购项目" align="center" width="250px">
    </el-table-column>
    <el-table-column
       prop="num"
      label="数量" align="center">
    </el-table-column>
    <el-table-column
       prop="model"
      label="型号" align="center">
    </el-table-column>
    <el-table-column
       prop="source"
      label="资金来源 " align="center">
    </el-table-column>
    <el-table-column
       prop="time"
      label="投入使用和开工时间" align="center">
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
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import tableHeader from "../table-header";
export default {
      data() {
      return {
        start : 0,
        end : 12,
        page : 1,
        rowstyle:()=>{
            return {
                color:'#333',
                lineHeight:'66px',
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
       handleCurrentChange(val) {
        this.page = val ;
        this.start=(`${val}`-1)*12;
        this.end=(parseInt(`${val}`))*12;
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
