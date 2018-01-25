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
      prop="name"
      label="楼盘名称" align="center">
    </el-table-column>
    <el-table-column
       prop="num"
      label="所在楼层" align="center">
    </el-table-column>
    <el-table-column
       prop="adds"
      label="商铺地点" align="center">
    </el-table-column>
    <el-table-column
       prop="photo"
      label="商铺照片" align="center">
     <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see2(scope.row)">查看</el-button>
      </template>
    </el-table-column>
    <el-table-column
       prop="price"
      label="商铺价格" align="center">
    </el-table-column>
        
  <el-table-column
       prop="type"
      label="商铺类型" align="center">
    </el-table-column>

  <el-table-column
       prop="zhuang"
      label="装修" align="center">
    </el-table-column>
<el-table-column
       prop="xiu"
      label="装修" align="center">
    </el-table-column>
  <el-table-column
       prop="staic"
      label="配套设施" align="center" width="300">
    </el-table-column>
    <el-table-column
       prop="inmsg"
      label=
      "入驻信息" align="center">
      <template slot-scope="scope">
        <el-button type="text" :plain="true" size="small" @click="see(scope.row)">查看</el-button>
      </template>
    </el-table-column>
   
  </el-table>
   <div v-if="block" class="laybox">
       <el-row>
           <el-col :span="24" class="boxtitle" style="">&nbsp;&nbsp;&gt;&gt;&nbsp;入驻信息</el-col>
           
       </el-row>
       <el-row class="subtitle">
           <el-col :span="20" class="proname" style="color:#999">&nbsp;&nbsp;{{ proname }}</el-col>
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
              &nbsp;&nbsp;名称：<span>{{proname}}</span>
           </el-col>
           <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;店铺类型：<span>{{shoptype}}</span>
           </el-col>
            <el-col :span="12" class="laytexttitle">
               &nbsp;&nbsp;经营类型：<span>{{comptype}}</span>
           </el-col>
             <el-col :span="24" class="laytexttitle">
               &nbsp;&nbsp;所属行业:<span>{{comin}}</span>
           </el-col>
       </el-row>
       <el-row>
           <el-col :span="24" class="laytexttitle">&nbsp;&nbsp;可销售范围：<span>{{shopfrom}}</span></el-col>
       </el-row>

    </div>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
  :total="$store.state.personouser.length" @current-change="handleCurrentChange">
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
        tableData:[],
        
        dynamicTags: ['新建待审核', '作废', '退租','续签'],
        inputVisible: false,
        inputValue: ''

      };
    },
    computed: {
        ...mapState({
         homeData: state => state.showstreet,
         block:state => state.block,
         proname:state => state.proname,
         addstitle:state => state.addstitle,
         addssubtitle:state=>state.addssubtitle,
         shoptype:state =>state.shoptype,
         comptype:state => state.comptype,
         comin:state => state.comin,
         shopfrom:state => state.shopfrom
      }),
      ...mapGetters([
          'doneTodos',
      ]),




    },
    created () {
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    methods: {
        handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
            this.$store.commit('showarc',message)
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
