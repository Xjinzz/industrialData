<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/Industrial/index">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                
                <span>资产管理</span>
                </template>
                <el-menu-item index="2-1" route="/Industrial/tenement">楼宇管理</el-menu-item>
                <el-menu-item index="2-2" route="/Industrial/dot">网点管理</el-menu-item>
                
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>招商管理</span>
                </template>

                <el-menu-item index="3-1" route="/Industrial/customer">客户管理</el-menu-item>
                
                <el-menu-item index="3-2" route="/Industrial/merchant">商户管理</el-menu-item>

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>合同管理</span>
                </template>
                <el-menu-item index="4-1" route="/Industrial/tobesubmit">待提交合同</el-menu-item>
                <el-menu-item index="4-2" route="/Industrial/contractadmin">合同管理</el-menu-item>
                <el-menu-item index="4-3" route="/Industrial/contractrev">合同审核</el-menu-item>
                

            </el-submenu>
            <el-submenu index="5">
                  <template slot="title">
                  <span>财务管理</span>
                  </template>
                  <el-menu-item index="5-1" route="/Industrial/marginmgt">收租管理</el-menu-item>
                  <el-menu-item index="5-2" route="/Industrial/rentmgt">保证金管理</el-menu-item>
                  <el-menu-item index="5-3" route="/Industrial/retirestt">退租结算</el-menu-item>
    

              </el-submenu>

                        <el-submenu index="6">
                  <template slot="title">
                  <span>数据分析</span>
                  </template>
                  <el-menu-item index="6-1" route="/Industrial/datachart">数据分析</el-menu-item>
                  
    

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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style  scoped>
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
  margin-left:30px;
  float: left;
  background:#fff;
  height: 1030px;
  margin-top:20px;
}
</style>