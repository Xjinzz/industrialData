<template>
  <!-- <div>{{count}}</div> -->
  <div style="background:#eee;">
  
    <tableHeader style="margin-top:20px;">
      <div slot="pagetitle">人员管理</div>
    </tableHeader>
  
    <div style="width:98%;margin:0 auto;">
  
      <el-table target="#mylist" :data="tableData" stripe :show-header="true" border style="width: 100%;height:800px;margin-top:20px;">
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="department" label="所在部门" align="center">
        </el-table-column>
        <el-table-column prop="chenghu" label="职位" align="center">
        </el-table-column>
        <el-table-column prop="tel" label="电话" align="center">
        </el-table-column>
        <el-table-column prop="intime" label="入职时间" align="center">
        </el-table-column>
  
        <el-table-column prop="staic" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="homeNum" label="操作" align="center">
          <template slot-scope="scope">
          <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
          <el-button type="text" :plain="true" size="small" @click="change(scope.$index)">编辑</el-button>
          <el-button type="text" :plain="true" size="small"  @click="deleteData(scope.$index)">删除</el-button>
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
  import {
    mapState
  } from 'vuex'
  import {
    mapMutations
  } from 'vuex'
  import {
    mapGetters
  } from 'vuex'
  import tableHeader from "../../table-header";
  export default {
    data() {
      return {
        start:0,
        end:12,
      };
    },
    computed: {
      ...mapState({
        homeData: state => state.personouser,
      }),
      ...mapGetters([
        'doneTodos',
      ]),
    tableData(){
      return this.homeData.slice(this.start, this.end);
    }
  
  
  
    },
    created() {
    },
    methods: {
      change(callmessage) {
        this.$prompt('姓名', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(({
          value
        }) => {
          this.$store.commit('changevalue3', {
            num: callmessage,
            storevalue: value
          })
        })
      },
      ...mapMutations({
        deleteData: 'deleteData'
      }),
  
  
  
      see(message) {
        const h = this.$createElement;
        this.$message({
          showClose: true,
          message: h('pre', null, [
            h('p', {
              style: 'color:#333;text-align:center;line-height:40px;font-size:20px;'
            }, '物业人员 '),
            h('p', {
              style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;'
            }, '姓名：'),
            h('p', {
              style: 'color: #bbcffb'
            }, message.name),
          ])
        });
  
  
      },
      handleCurrentChange(val) {
        this.start = (`${val}` - 1) * 12;
        this.end = (`${val}` + 1) * 12;

  
      }
    },
    components: {
      tableHeader,
    }
  }
</script>

<style scoped>
  .el-menu--horizontal .el-menu-item {
    font-size: 20px;
    line-height: 72px;
    margin-left: 80px;
  }
  
  .pagetitle {
    font-size: 18px;
    line-height: 50px;
  }
  
  .list_title {
    font-size: 18px;
    line-height: 78px;
    font-weight: 800;
  }
  
  #table_title {
    font-size: 16px;
    line-height: 70px;
    text-align: center
  }
  
  #fenye {
    width: 100%;
    background: #fff;
    text-align: center;
    line-height: 34px;
    padding-top: 40px;
  }
</style>
