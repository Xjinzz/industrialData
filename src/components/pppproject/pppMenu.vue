<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
               <el-menu-item index="1" route="/ppp/projectindex">
                <span slot="title">首页</span>
                 </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                    <span>项目库管理</span>
                    </template>
                    <el-menu-item index="2-1" route="/ppp/projectList">项目列表</el-menu-item>
                    <el-menu-item index="2-2" route="/ppp/projectDetail">项目详情</el-menu-item>
                    <el-menu-item index="2-3" route="/ppp/settledEnterprise">入驻企业</el-menu-item>                    
                </el-submenu>
                <el-submenu index = "3">
                    <template slot = "title">
                        <span>项目投资管理</span>
                    </template>
                    <el-menu-item index= "3-1" route="/ppp/projectInvestment">
                        项目列表
                    </el-menu-item>
                    <el-menu-item index= "3-2" route="/ppp/projectinvestment">
                        项目详情
                    </el-menu-item> 
                    <el-menu-item index= "3-3" route="/ppp/projectInvest">
                        投资信息
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                    <span>招标管理</span>
                    </template>
                    <el-menu-item index="4-1" route = "/ppp/bulletin">公告摘要</el-menu-item>
                    <el-menu-item index="4-2" route="/ppp/bulletinText">公告正文</el-menu-item>
                    
                </el-submenu>
                <el-submenu index= "5">
                    <template slot="title">
                        <span>项目支出管理</span>
                    </template>
                    <el-menu-item index = "5-1" route="/ppp/consumptionlist">
                        支出清单
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                    <span>项目收益分析</span>
                    </template>
                    <el-menu-item index="6-1" route="/ppp/profitlist">收益列表</el-menu-item>
                </el-submenu>
          </el-menu>
    </el-col>
    </div>
    <router-view id="loginview"></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      
    },
    handleClose(key, keyPath) {
     
    }
  }
};
</script>
<style  scope>
#menu {
  width: 200px;
  height: 1080px;
  background: #2a3137;
  float: left;
}
/* #loginView{
        width:160px;
        
    } */
#loginview {
  width: 1600px;
  margin-left: 30px;
  float: left;
  background: #fff;
  height: 1030px;
  margin-top: 20px;
}
</style>