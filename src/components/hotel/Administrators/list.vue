<template>
    <div style="background:#eee;">
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename6}}</div>
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
      label="姓名" align="center">
    </el-table-column>
    <el-table-column
       prop="type"
      label="管理员类型" align="center">
    </el-table-column>
    <el-table-column
       prop="department"
      label="部门" align="center">
    </el-table-column>
    <el-table-column
       prop="creat"
      label="创建时间" align="center">
    </el-table-column>
    <el-table-column
       prop="status"
      label="状态" align="center">
    </el-table-column>
        

    <el-table-column
       prop="st"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" v-if="tableData[scope.$index].jurone" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
        <el-button type="text" v-if="tableData[scope.$index].jurtwo"  :plain="true" size="small" @click="change(scope.$index)">编辑</el-button>
        <el-button type="text" v-if="tableData[scope.$index].jurthree" :plain="true" size="small"  @click="deleteData({index:scope.$index,page:page})">删除</el-button>
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
import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import tableHeader from "../../table-header";
export default {
      data() {
      return {
        start : 0,
        end : 12,
        page : 1,
      };
    },
    computed: {
        ...mapState({
         homeData: state => state.hotelAdminList,
      }),
      ...mapGetters([
          'doneTodos',
      ]),
      tableData(){
        return this.homeData.slice(this.start,this.end)
      }



    },
    created () {
    },
    methods: {
        change(callmessage) {
        this.$prompt('姓名', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(({ value }) => {
            this.$store.commit('changevalue',{
              num:callmessage,
              storevalue:value,
              page : this.page
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
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '管理员 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '姓名：'),
            h('p', { style: 'color: #bbcffb' }, message.name),
          ])
        });
           
           
        },
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
