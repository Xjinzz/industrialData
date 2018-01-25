<template>
    <!-- <div>{{count}}</div> -->
    <div>
        <div class="layor" v-if="block" @click="see()"></div>
   
    <div style="background:#eee;position:relative">
        
          <tableHeader style="margin-top:20px;">
            <div slot="pagetitle">{{$store.state.pagename8}}</div>
        </tableHeader>
        
        <div style="width:98%;margin:0 auto;">
            
            <el-table
    target="#mylist"
    :data="tableData"
    stripe
    :show-header="true"
    border
    style="width: 100%;height:820px;margin-top:20px;">
    <el-table-column 
      prop="projectname"
      label="项目名称" align="center">
    </el-table-column>
    <el-table-column
       prop="projectattr"
      label="项目属性" align="center">
    </el-table-column>
    <el-table-column
       prop="projecttype"
      label="项目类型" align="center">
    </el-table-column>
    <el-table-column
       prop="field"
      label="行业领域" align="center">
    </el-table-column>
    <el-table-column
       prop="creattime"
      label="立项时间" align="center">
    </el-table-column>
    <el-table-column
     prop="projectimg"
      label="项目图片" align="center">
        <template slot-scope="scope">          
           <el-button type="text" :plain="true" size="small">查看</el-button>
        </template>
   </el-table-column>






    <el-table-column
       prop="st"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.$index)">查看</el-button>
        <el-button type="text" :plain="true" size="small" @click="change(scope.$index)">编辑</el-button>
        <el-button type="text" :plain="true" size="small"  @click="deleteData(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div v-if="block" class="laybox">
       <el-row>
           <el-col :span="24" class="boxtitle" style="">&nbsp;&nbsp;&gt;&gt;&nbsp;项目详情</el-col>
           
       </el-row>
       <el-row class="subtitle">





       

           <el-col :span="20" class="proname" style="color:#999">&nbsp;&nbsp;{{ projectname }}</el-col>
           <el-col :span="4" class="fujian"><i class="el-icon-download"></i><span>附件管理&nbsp;&nbsp;</span></el-col>
       </el-row>
       <el-row style="padding-top:40px;padding-bottom:40px;" class="subtitle">
           <el-col :span="24" class="addstitle">&nbsp;&nbsp;{{ addstitle }}</el-col>
           <el-col :span="24" class="addssubtitle" style="color:#999">&nbsp;&nbsp;{{ addssubtitle }}</el-col>

       </el-row>
       <el-row class="subtitle">
           <el-col :span="4" class="laytexttitle">&nbsp;&nbsp;摘要</el-col>
           <el-col :span="20" :offset="0" style="margin-top:25px;" >
               <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                    </el-tag>
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

           </el-col>
           <el-col :span="24" class="laytexttitle">
              &nbsp;&nbsp;项目名称<span>{{projectname}}</span>
           </el-col>
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;项目类型：<span>{{projectattr}}</span>
           </el-col>
            <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;联系方式：<span>{{tel}}</span>
           </el-col>
             <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;行业领域:<span>{{field}}</span>
           </el-col>
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;地块面积:<span>{{arc}}</span>
           </el-col>
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;立项时间:<span>{{creattime}}</span>
           </el-col>
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;拟合作年限:<span>{{year}}</span>
           </el-col>
             <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;项目估算:<span>{{estimate}}</span>
           </el-col>  
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;是否已入库:<span>{{isstore}}</span>
           </el-col>
            <el-col :span="24" class="laytexttitle">
               &nbsp;&nbsp;建设内容与规模:<span>{{content}}</span>
           </el-col>
       </el-row>






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
        dynamicTags: ['新建待审核', '作废', '退租','续签'],
        inputVisible: false,
        inputValue: '',
        start:0,
        end:12,
        page:1,

      };
    },
    computed: {
        ...mapState({
         homeData: state => state.pppProject.settledEnterprise,
         projectname: state => state.pppProject.projectname,
         projectattr: state => state.pppProject.projectattr,
         field: state => state.pppProject.field,
         addstitle: state => state.pppProject.addstitle,
         arc: state => state.pppProject.arc,
         year: state => state.pppProject.year,
         estimate: state => state.pppProject.estimate,
         isstore: state => state.pppProject.isstore,
         content: state => state.pppProject.content,
         tel: state => state.pppProject.tel,
         addssubtitle: state => state.pppProject.addssubtitle,
         creattime: state => state.pppProject.creattime,
         block: state => state.pppProject.block,
         
      }),
        tableData(){
            return this.homeData.slice(this.start,this.end);
        },
    },
    methods: {
             change(callmessage) {
        this.$prompt('姓名', '修改提示', {
          confirmButtonText: '修改',
          cancelButtonText: '取消',
        }).then(({ value }) => {

            
            this.$store.commit('setDataEnterprise',{
              num:callmessage,
              storevalue:value,
              page : this.page
            })
        })
      },
        handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
        deleteData(callmessage){
            this.$alert('确定删除么','网页提示',{
                confirmButtonText: '删除',
            }).then(()=>{
                 this.$store.commit('deleteDataEnterprise',{
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
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
        

        see(message){
           
            this.$store.commit('showdetail',{
                page:this.page,
                message:message,
            })
        },
        see2(message){
             const h = this.$createElement;
        this.$message({
            showClose: true,
          message: h('pre', null, [
            h('p', {style:'color:#333;text-align:center;line-height:40px;font-size:20px;'}, '商铺照片 '),
            
          ])
        });
        },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*12;
        this.end=(`${val}`+1)*12;
        this.page = val;
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
    .laybox{
        width:40%;
        height: 100%;
        position: absolute;
        right: 0%;
        top:0px;
        /* background:#333; */
        background:#fff;
        z-index:4
    }
    html{
        position: relative;
        z-index: 0;  
  }
    .layor{
        position:absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        z-index: 3;
        background:rgba(30,30,30,0.5);
    }
     .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
