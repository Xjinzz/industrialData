<template>
    <div style="background:#eee;">
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">收益列表</div>
        </tableHeader>
        
        <div style="width:98%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:800px;margin-top:20px;" :row-style = "rowstyle">
    <el-table-column 
      prop="projectname"
      label="项目名称" align="center" width="250px">
    </el-table-column>
    <el-table-column
       prop="investmentage"
      label="选择投资期限" align="center">
    </el-table-column>
    <el-table-column
       prop="rateofyear"
      label="平均年化收益率" align="center">
         <template slot-scope = "scope">
             <span style = "color:#4986f7">
                {{
                    fulldata[(page-1)*12+scope.$index].rateofyear +"%"
                     
                }} 
             </span>
         </template>


    </el-table-column>
    <el-table-column
       prop="investmentmoney"
      label="投资金额" align="center">
        <template slot-scope = "scope">
            <span style = "display:inline-block;width:68%;">
                <el-slider v-model="fulldata[(page-1)*12+scope.$index].investmentmoney" @change="func(scope)"></el-slider>
            </span>
            
            <span style = "margin-top:-15px;display:inline-block;width:28%;text-align:center;position:relative;top:-13px;">
                {{
                    fulldata[(page-1)*12+scope.$index].investmentmoney +"%"
                }}
            </span>
        </template>
    </el-table-column>
    <el-table-column
       prop="lastmoney"
      label="剩余金额" align="center">
      <template slot-scope = "scope">
          <span>
              {{fulldata[(page-1)*12+scope.$index].money/100*(100-fulldata[(page-1)*12+scope.$index].investmentmoney)+ "万元"}}
          </span>
      </template>
    </el-table-column>
    <el-table-column
       prop="st"
      label="操作"
      align="center">
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
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
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
         homeData: state => state.pppProject.profitlist,
        //  前端展示用的数组
         fulldata:state => state.pppProject.profitlist,
      }),
      tableData(){
        return this.homeData.slice(this.start,this.end)
      },
     
    },
    beforeCreate(){
        this.$store.commit('addstr');
    },
    created () {
    },
    methods: {
        func(data){
            this.$store.commit("changeprofitlist",{
                data,
                page:this.page
            });
                
        },
        change(callmessage) {
        this.$prompt('姓名', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(({ value }) => {

            
            this.$store.commit('setinvesProfitlist',{
              num:callmessage,
              storevalue:value,
              page : this.page
            })
        })
      },
        see(message){
        const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '管理员 '),
            h('p', { style: 'color: teal;font-weight:800;font-size:16px;margin-top:10px;' }, '姓名：'),
            h('p', { style: 'color: #bbcffb' }, message.projectname),
          ])
        });
           
           
        },
        deleteData(callmessage){
            this.$alert('确定删除么','网页提示',{
                confirmButtonText: '删除',
            }).then(()=>{
                 this.$store.commit('deleteDataProfitlist',{
                    num:callmessage,
                    page : this.page,

                })
            }).catch(()=>{
                 const h = this.$createElement;
                this.$message({
                    showClose: true,
                    message: h('pre', null, [
                            h('p', { style: 'color: #333' }, '已经取消'),
                        ])
                    });
                })
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
