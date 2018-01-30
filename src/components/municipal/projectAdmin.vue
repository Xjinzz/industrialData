<template>
   <el-container>
      <el-main>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane><span slot = "label"></span></el-tab-pane>
            <el-tab-pane label="项目监管" name="first">
                <el-row class = "row_top30">
                    <el-col :span = "4" :offset = "18">
                        <el-col :span = "8">
                            <el-button round size = "small">搜索</el-button>
                        </el-col>
                        <el-col :span = "8">
                            <el-button round size = "small">添加</el-button>
                        </el-col>
                         <el-col :span = "8" >
                           <el-dropdown>
                                <el-button round size = "small">数据导出<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>下啦1</el-dropdown-item>
                                    <el-dropdown-item>下拉2</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-col>
                </el-row>
               <el-row class = "row_top30">
                   <el-col :span = "24" class="contine_header"></el-col>
               </el-row>
               <el-row>
                   <el-col :span="3" style = "text-align:center;">
                        <!-- 暂时布设route路由 后期想家可以在家 -->
                        <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo" style= "height:780px">
                            <el-menu-item index="1">
                                <span slot="title">路径分析</span>
                            </el-menu-item>
                            <el-menu-item index="2">
                            
                                <span slot="title">周边查询</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                            
                                <span slot="title">关注</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                            
                                <span slot="title">查询</span>
                            </el-menu-item>
                        </el-menu>
                   </el-col>
                   <el-col :span = "18">
                       <img src="" v-lazy="imgUrl"  alt="" width = "100%">
                       
                   </el-col>
                   <el-col :span = "3" class = "project_info">
                       <p><span class = "title">地点：</span>通州</p>
                       <p><span class = "title">资金：</span>80-100万</p>
                       <p><span class = "title">类型：</span>道路</p>
                       <p><span class = "title">开工日期：</span>2017.01.23</p>
                       <p><span class = "title">预计完工：</span>2017.04.24</p>
                       <p><span class = "title">状态：</span>在建</p>
                       
                   </el-col>
               </el-row>
            </el-tab-pane>
            <el-tab-pane label="项目资料" name="second">项目资料</el-tab-pane>
            <el-tab-pane label="数据管理" name="third">数据管理</el-tab-pane>
            <el-tab-pane label="信息发布" name="fourth">信息发布</el-tab-pane>
            <el-tab-pane label="系统管理" name="five">系统管理</el-tab-pane>            
        </el-tabs>
      </el-main>
    </el-container>
</template>
<script>
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2:"2_1",
        imgUrl:"static/img/municipal/1.jpg"
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },

  };
</script>

<style scoped>
    .row_top30{
        margin-top:30px;
    }
    .contine_header{
        line-height: 50px;
        color:#fff;
        background:#ccc;
        font-size:20px;
        text-align:center;
        letter-spacing: 5px;
    }
    .contine_header:before{
        content:"通州"
    }
    .project_info{
        color:#333;
         text-indent:1em;
         margin-top:20px;
         line-height:40px;
    }  
    .project_info span{
        color:#ccc;
       

    }
</style>
