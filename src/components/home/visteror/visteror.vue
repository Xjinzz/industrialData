<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename6}}</div>
        </tableHeader>
        
        <div style="width:90%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:800px;margin-top:20px;">
    <el-table-column 
      prop="name"
      label="姓名" align="center">
    </el-table-column>
    <el-table-column
       prop="num"
      label="身份证号" align="center" width="220">
    </el-table-column>
    <el-table-column
       prop="carnum"
      label="车牌号" align="center">
    </el-table-column>
    <el-table-column
       prop="tel"
      label="联系方式" align="center" >
    </el-table-column>
    <el-table-column
       prop="intime"
      label="入场时间" align="center" width="200">
    </el-table-column>
        
  <el-table-column
       prop="litime"
      label="立项时间" align="center" width="200">
    </el-table-column>

    <el-table-column
       prop="inimg"
      label="入场图片"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="inner(scope.row)">查看</el-button>
       
      </template>
    </el-table-column>



    <el-table-column
       prop="outerimg"
      label="出场图片"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="outer(scope.row)">查看</el-button>
       
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :total="$store.state.visteror.length" @current-change="handleCurrentChange">
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
import tableHeader from "../../table-header";
export default {
      data() {
      return {
        tableData:[]
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.visteror,
      }),
      ...mapGetters([
          'doneTodos',
      ]),




    },
    created () {
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    methods: {

      ...mapMutations({
          deleteData:'deleteData'
      }),
   
        inner(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '进场图片'),
            h('p', { style: 'color: #bbcffb' }, message.name),
          ])
        }); 
           
        },
               outer(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '出场图片'),
            h('p', { style: 'color: #bbcffb' }, message.name),
          ])
        }); 
           
        },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`+1)*13;
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
