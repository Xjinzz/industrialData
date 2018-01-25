<template>
    <!-- <div>{{count}}</div> -->
    <div style="background:#eee;">

          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename7}}</div>
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
      prop="place"
      label="巡更点" align="center">
    </el-table-column>
    <el-table-column
       prop="placeuser"
      label="巡逻员" align="center">
    </el-table-column>
    <el-table-column
       prop="intime"
      label="入职时间" align="center">
    </el-table-column>
    <el-table-column
       prop="staic"
      label="状态" align="center">
    </el-table-column>
    <el-table-column
       prop="homeNum"
      label="操作"
      align="center">
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
  :total="$store.state.video.length-13" @current-change="handleCurrentChange">
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
         homeData: state => state.video,
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
        this.$prompt('姓名', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(({ value }) => {
            this.$store.commit('changevalue3',{
              num:callmessage,
              storevalue:value
            })
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
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '状态：'),
            h('p', { style: 'color: #bbcffb' }, message.staic),
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
