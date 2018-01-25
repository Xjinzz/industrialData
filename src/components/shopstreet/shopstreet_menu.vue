<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/shopstreet/index">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                
                <span>招商管理</span>
                </template>
                <el-menu-item index="2-1" route="/shopstreet/showstreet">招商展示</el-menu-item>
                 <el-menu-item index="2-2" route="/shopstreet/addshopstreet">添加商铺</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>商铺管理</span>
                </template>

                <el-menu-item index="3-1" route="/shopstreet/streetlist">商铺列表</el-menu-item>
               
                
                

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>广告位管理</span>
                </template>
                <el-menu-item index="4-1" route="/shopstreet/bannerlist">广告位管理</el-menu-item>
                <el-menu-item index="4-2" route="/shopstreet/addBanner">添加广告</el-menu-item>
                <el-menu-item index="4-3" route="/shopstreet/addBannerPosition">添加广告位</el-menu-item>
                

            </el-submenu>
            <el-submenu index="5">
                  <template slot="title">
                  <span>数据中心</span>
                  </template>
                  <el-menu-item index="5-1" route="/shopstreet/dataList">租客数据统计</el-menu-item>
                  <el-menu-item index="5-2" route="/shopstreet/revenenue">费用收支明细</el-menu-item>
                  <el-menu-item index="5-3" route="/shopstreet/shop">商铺出租率</el-menu-item>
    

              </el-submenu>

                        <el-submenu index="6">
                  <template slot="title">
                  <span>权限管理</span>
                  </template>
                  <el-menu-item index="6-1" route="/shopstreet/adminList">管理员列表</el-menu-item>
                  <el-menu-item index="6-2" route="/shopstreet/streetAddAdmin">添加管理员</el-menu-item>
                  <el-menu-item index="6-3" route="/shopstreet/streetpurChange">权限授权</el-menu-item>
                  
    

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
  /* margin-left:30px; */
  float: left;
  background:#fff;
  height: 1030px;
  margin-top:20px;
}
</style>