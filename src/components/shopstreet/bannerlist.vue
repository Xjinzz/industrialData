<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename10}}</div>
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
      prop="num"
      label="编号" align="center">
    </el-table-column>
    <el-table-column
       prop="bannertype"
      label="广告类型" align="center">
    </el-table-column>
    <el-table-column
       prop="bannerposition"
      label="板位" align="center">
    </el-table-column>
    <el-table-column
       prop="static"
      label="状态" align="center">
    </el-table-column>
    <el-table-column
       prop="lasttime"
      label="剩余时间" align="center">
    </el-table-column>
    <el-table-column
       prop="cao"
      label="操作"
      align="center">
      <template slot-scope="scope">
          <el-button type="text" :plain="true" size="small" @click="change(scope.row)">编辑</el-button>
        <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
        <el-button type="text" :plain="true" size="small" @click="more(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :page-count="Math.ceil(homeData.length/13)" @current-change="handleCurrentChange">
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
        start:0,end:13,
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.bannerlist,
      }),
      ...mapGetters([
          'doneTodos',
      ]),




    },
    created () {
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    methods: {
        change(callmessage) {
        this.$prompt('价格', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(()=>{
            /***
             * do something
             */
        })
       
      },
      ...mapMutations({
          deleteData:'deleteData'
      }),
   
        

        see(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '查看页面 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '价格'),
            h('p', { style: 'color: #bbcffb' }, message.price),
          ])
        });
           
           
        },

        more(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '删除页面'),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '删除店铺：'),
            h('p', { style: 'color: #bbcffb' }, message.num),
          ])
        });
        },
        inner(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '图片'),
            h('p', { style: 'color: #bbcffb' }, message.num),
          ])
        }); 
           
        },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`)*13;
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
