<template>
  <!-- <div>{{count}}</div> -->
  <div style="background:#eee;">
  
    <tableHeader style="margin-top:20px;">
      <div slot="pagetitle">{{$store.state.pagename6}}</div>
    </tableHeader>
  
    <div style="width:90%;margin:0 auto;">
  
      <el-table target="#mylist" :data="homelist" stripe :show-header="true" border style="width: 100%;height:800px;margin-top:20px;">
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="sex" label="性别" align="center" width=80>
        </el-table-column>
        <el-table-column prop="tel" label="联系方式" align="center">
        </el-table-column>
        <el-table-column prop="address" label="住址" align="center">
        </el-table-column>
        <el-table-column prop="intime" label="入住时间" align="center" width=300>
        </el-table-column>
        <el-table-column prop="type" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="homeNum" label="操作" align="center" width="250">
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
  :total="$store.state.home.homelistContent.length-10" @current-change="handleCurrentChange">
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
        tableData: [],
        start: 0,
        end: 13,
      };
    },
    computed: {
      ...mapState({
        homeData: state => state.home.homelistContent,
  
      }),
      ...mapGetters([
        'homelistContent2'
      ]),
      homelist() {
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
          this.$store.commit('changevalue2', {
            num: callmessage,
            storevalue: value
          })
        })
      },
      deleteData(index) {
        this.$store.commit('deleteData2', index)
      },
      see(message) {
        const h = this.$createElement;
        this.$message({
          showClose: true,
          message: h('pre', null, [
            h('p', {
              style: 'color:#333;text-align:center;line-height:40px;font-size:20px;'
            }, '客户资料 '),
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
  
        this.start = (`${val}` - 1) * 13;
  
        this.end = (`${val}` + 1) * 13;
        this.tableData = this.homeData.slice(this.start, this.end);
  
  
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
    /* margin-bottom:30px; */
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
