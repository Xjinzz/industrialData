<template>
    <!-- <div>{{count}}</div> -->
    <div>
    <div style="background:#eee;position:relative">
        
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">保证金管理</div>
        </tableHeader>
        
        <div style="width:98%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    highlight-current-row:true
    :row-style = "mystyle"
    style="width: 100%;height:800px;margin-top:0px;line-height:40px;">
    <el-table-column 
      prop="num"
      label="合同编号" align="center">
    </el-table-column>
    <el-table-column
       prop="name"
      label="项目名称" align="center">
    </el-table-column>
    <el-table-column
       prop="worknum"
      label="工位编号" align="center">
    </el-table-column>
    <el-table-column
       prop="user"
      label="退租方" align="center">
    </el-table-column>
  <el-table-column
       prop="area"
      label="面积" align="center">
    </el-table-column>

  </el-table>
    </div>
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
        tableData:[],
        start:0,
        end:12,
        mystyle:{
            color:'#999',
            height:'66px'
        }
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.retirestt,
        
      }),
      
    

    },
    created () {
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    methods: {
        handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

       handleCurrentChange(val) {
        this.start=(`${val}`-1)*12;
        this.end=(`${val}`+1)*12;
        this.tableData=this.homeData.slice(this.start,this.end);

      }
    },
    components: {
        tableHeader,
    }
}
</script>

<style scoped>
.laytexttitle{
    font-size:18px;line-height:80px;color:#999;
}
.laytexttitle span{
    color:#666;
}
.addssubtitle{
    font-size:24px;
    line-height:50px;
    color:#333;
}
.addstitle{
    font-size:18px;
    line-height:30px;
    color:#999;
}
.subtitle{
    border-bottom:1px solid #ccc;
}
.fujian{
    color:#4986f7;
    font-size:18px;
    line-height: 70px;
}
.proname{
    font-size:24px;
    line-height: 70px;

}

.boxtitle{
    font-size:18px;line-height:80px;
}

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
