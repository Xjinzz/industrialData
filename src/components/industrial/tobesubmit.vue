<template>
    <!-- <div>{{count}}</div> -->
    <div>
          <tableHeader style="color:#666">
            <div slot="pagetitle">待提交合同</div>
        </tableHeader>

        <el-row :span="24">
            <el-col :span="12" style ="text-align:center">
                      <p class="contentTitle">合同总计</p>
                      <div class="homesnum">371个</div>
            </el-col>
             
        </el-row>
        <div style="width:98%;margin:0 auto;">
       
            <el-table
    target="#mylist"
    :data="tableData"
    
    :show-header="true"
    border
    style="width: 100%;height:670px;border-top:1px solid #ccc;">
    <el-table-column 
      prop="num"
      label="合同编号" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="name"
      label="项目名称" align="center">
    </el-table-column>
    <el-table-column
       prop="number"
      label="工位编号" align="center">
    </el-table-column>
    <el-table-column
       prop="startdata"
      label="起始日期" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="enddata"
      label="合同到期日期" align="center" width="180">
    </el-table-column>
  <el-table-column
       prop="lasttime"
      label="到期时间" align="center">
      <template slot-scope="scope">
        
        <el-col type="text" size="small">{{timeend(scope.row.enddata)}}</el-col>

        
        
      </template>
    </el-table-column>
      <el-table-column
       prop="static"
      label="状态" align="center" width="180">
        <template slot-scope="scope">
        <el-col type="text" style="color:#4986f7">待提交</el-col> 
      </template>
    </el-table-column>
    <el-table-column
       prop="operation"
      label="操作"
      width="200" align="center">
      <template slot-scope="scope">
        <el-button @click="open(scope.row)" type="text" size="small">详情</el-button>
        <el-button @click="submit(scope.row)" type="text" size="small">提交</el-button>
        

        
        
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
let myDate = new Date();
export default {
    computed: {
          homeData(){
            return this.$store.state.contract
          },
          tableData(){
               return this.homeData.slice(this.start,this.end);
          }

    },
      data() {
      return {
        activeIndex: 'all',
        todata:myDate.toLocaleDateString(),
        start:0,
        end:10,
   
      };
    },
    filters:{
      dataFormat(value){
        return value.split('/').map(
          item =>{return item.length<2?'0'+item:item;
        }).join('').replace(new RegExp('/','g'),'');
      },
      shengxiao(value){
        
        return "生效"+value;
      },
      daoqi(val){
        return '过期'+val;
      },
    },
    methods: {
      submit(data){
        this.$confirm('确认要提交审核么', '提示', {
          confirmButtonText: '提交',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.commit('submitData',{
             row:data,
           })
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '用户取消'
          });          
        });






          
        },
      timeend(val){
        let arrend = val.split('-').join('/');
        let arrtoday = myDate;
          let str = Math.floor((new Date(arrend).getTime() - arrtoday.getTime())/(24*3600*1000))
        return str<0?'过期':str+'天';
     },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*10;
        this.end=(`${val}`+1)*10;
      },
      
    },
     created () {
       
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

.homesnum{
  width:160px;line-height:52px;background:#f8fbfe;color:#3384d5;font-size:26px;margin:0 auto;text-align:center;margin-bottom:30px;;
}
.contentTitle{
  font-size:20px;
  margin-top:20px;
  color:#999;
}


</style>
