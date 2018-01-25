<template>
    <!-- <div>{{count}}</div> -->
    <div>
        <el-col :span="23" :offset="1" class="pagetitle">Q+早安酒店北京西云阁店</el-col>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#666666" open="all">
            
            <el-menu-item index="all">所有房间</el-menu-item>
            <el-menu-item index="普通单间">普通单间</el-menu-item>
            <el-menu-item index="普通标间">普通标间</el-menu-item>
            <el-menu-item index="豪华单间">豪华单间</el-menu-item>
            <el-menu-item index="豪华标间">豪华标间</el-menu-item>
        </el-menu>
        <div style="width:98%;margin:0 auto;">
         
            <el-table
    target="#mylist"
    :data="tableData"
    
    :show-header="true"
    border
    style="width: 100%;height:850px;">
    <el-table-column 
      prop="homeNum"
      label="房间号" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="homeState"
      label="房间状态" align="center">
    </el-table-column>
    <el-table-column
       prop="homePosition"
      label="位置" align="center">
    </el-table-column>
    <el-table-column
       prop="homeType"
      label="房间类型" align="center" width="280">
    </el-table-column>
    <el-table-column
       prop="homePrice"
      label="价格" align="center" width="180">
    </el-table-column>

    <el-table-column
       prop="homeNum"
      label="操作"
      width="400" align="center">
      <template slot-scope="scope">
        <el-button @click="open(scope.row)" type="text" size="small">申请入住</el-button>
        <el-button @click="yuding(scope.row)" type="text" size="small">预定</el-button>
        <el-button type="text" size="small" @click="xiugai(scope.row)">修改价格</el-button>
        <el-button type="text" size="small">详情</el-button>
        <el-button type="text" size="small">删除房间</el-button>
        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye" style="width:100%;">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next,jumper,total"
  :page-count="Math.ceil(middleData.length/12)" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
      ...mapState({
          homeData: state => state.homeData
      }),

    },
      data() {
      return {
        activeIndex: 'all',  
        start:0,
        end:13,
        page:1,
        middleData:null,
        tableData:null,
      };
    },
    watch:{
      middleData(){
        this.tableData = this.middleData.slice(this.start,this.end)
      }
    },
    methods: {
        // 选项卡
      handleSelect(key, keyPath) {
        switch (key) {
            case '普通单间':this.middleData=this.homeData.filter(item=>{
              
                return item.grade=='普通单间';
            });this.handleCurrentChange(1);
            break;
         case '普通标间':this.middleData=this.homeData.filter(item=>{
                return item.grade=='普通标间';
            });this.handleCurrentChange(1);break;
           case '豪华单间':this.middleData=this.homeData.filter(item=>{
                return item.grade=='豪华单间';
            });this.handleCurrentChange(1);break;
              case '豪华标间':this.middleData=this.homeData.filter(item=>{
                 return item.grade=='豪华标间';
            });this.handleCurrentChange(1);break;
            case 'all':this.middleData=this.homeData;this.handleCurrentChange(1);break;  
        }
      },
      open(messagename){
        const h = this.$createElement;
        this.$msgbox({
          title: 'Q+早安酒店北京西云阁店提示您',
          message: h('p', null, [
            h('span', null, '您应缴纳:'+messagename.homePrice+'元'),
          ]),
          showCancelButton: true,
          confirmButtonText: '缴纳',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '支付中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 1000);
            } else {
                done();
              this.$message({
            type: 'error',
            message: '支付失败,请重新支付',
            showClose:true,
            center:true,
            
          });
            }
          }
        }).then(()=>{
          this.$store.commit('liveS',{
            msg : messagename,
            page : this.page,
          })
        }).then(action => {
          this.$message({
            type: 'success',
            message: '欢迎入住Q+早安酒店北京西云阁店',
            center:true,
          });
        }).then(()=>{
          this.middleData = this.homeData;
        });
      },

            yuding(messagename){
 const h = this.$createElement;
        this.$msgbox({
          title: 'Q+早安酒店北京西云阁店提示您',
          message: h('p', null, [
            h('p', null, '您应缴纳:'),
            h('p', null, '房间费：'+(messagename.homePrice)+'元'),   
            h('p', null, '押金费:'+40+'元'),       
                     
            h('p', {style:'font-size:18px;text-align:center;color:#f00;'}, '总计：'+(messagename.homePrice+40)+'元'),
            
          ]),
          showCancelButton: true,
          confirmButtonText: '缴纳',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '支付中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 2000);
            } else {
                done();
              this.$message({
            type: 'error',
            message: '预定失败，失败原因可能是：未支付成功',
            showClose:true,
            center:true,
            
          });
            }
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: '预定Q+早安酒店北京西云阁店已成功，请及时入住',
            center:true,
          });
        });
      },
            xiugai(price) {
        this.$prompt('请输入修改的价格', 'Q+早安酒店北京西云阁店', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
          inputErrorMessage: '密码错误'
        }).then(
            ({ value }) => {
          this.$message({
            type: 'success',
            message: '修改价格为: ' + value,
            
          });
          price.homePrice=value;
        }
        ).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleClick(row) {
        
      },
      openFullScreen() {
     
      },
       handleCurrentChange(val) {
         this.page = val;
        this.start=(`${val}`-1)*13;
        this.end=(`${val}`)*13;
        this.tableData = this.homeData.slice(this.start,this.end)
      }
    },
     created () {
        this.tableData = this.homeData.slice(this.start,this.end)
        this.middleData = this.homeData;
    },

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
    position: relative;
    z-index:9
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
        background:#fff;
        text-align:center;
        line-height: 34px;
        padding-top:40px;
    }
    

</style>
