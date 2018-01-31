<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/hotel/index">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                
                <span>房间状态</span>
                </template>
                <el-menu-item index="2-1" route="/hotel/homeShow">房间展示</el-menu-item>
                <el-menu-item index="2-2" route="/hotel/userlive">顾客入住</el-menu-item>
                <el-menu-item index="2-3" route="/hotel/addHome">添加房间</el-menu-item>
                <el-menu-item index="2-4" route="/hotel/Reservelive">预定房间</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>顾客登记</span>
                </template>
                <el-menu-item index="3-1" route="/hotel/liveList">入住信息</el-menu-item>
                <el-menu-item index="3-2" route="/hotel/lenve">退房信息</el-menu-item>

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>会员管理</span>
                </template>
                <el-menu-item index="4-1" route="/hotel/viper">会员列表</el-menu-item>
                <el-menu-item index="4-2" route="/hotel/addvip">添加会员</el-menu-item>

            </el-submenu>
            <el-submenu index="5">
                  <template slot="title">
                  <span>财务管理</span>
                  </template>
                  <el-menu-item index="5-1" route="/hotel/fill">流水账单</el-menu-item>
                  <el-menu-item index="5-2" route="/hotel/tongji">账单统计</el-menu-item>

              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                <span>权限管理</span>
                </template>
                <el-menu-item index="6-1" route="/hotel/adminList">管理员列表</el-menu-item>
                <el-menu-item index="6-2" route="/hotel/addAdmin">添加管理员</el-menu-item>
                <el-menu-item index="6-3" route="/hotel/purChange">权限管理</el-menu-item>
              </el-submenu>
          </el-menu>
    </el-col>
    </div>



        
        <router-view id="loginview" style = "width: 1600px;float: left;margin-left:30px;"></router-view>

    
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

</style>