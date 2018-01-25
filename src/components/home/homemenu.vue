<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/home/index">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                <span>住户管理</span>
                </template>
                <el-menu-item index="2-1" route="/home/personAdmin">人员管理</el-menu-item>
                <el-menu-item index="2-2" route="/home/livecar">车辆管理</el-menu-item>
                <el-menu-item index="2-3" route="/home/addliveperson">添加业主</el-menu-item>
                <el-menu-item index="2-4" route="/home/addlivecar">添加车辆</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>物业人员管理</span>
                </template>

                <el-menu-item index="3-1" route="/home/personouser">人员管理</el-menu-item>
                <el-menu-item index="3-2" route="/home/caradmin">车辆管理</el-menu-item>
                <el-menu-item index="3-3" route="/home/addPersonouser">添加业主</el-menu-item>
                <el-menu-item index="3-4" route="/home/addCar">添加车辆</el-menu-item>
                

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>视频监控</span>
                </template>
                <el-menu-item index="4-1" route="/home/real">实时监控</el-menu-item>
                <el-menu-item index="4-2" route="/home/videoed">录像回放</el-menu-item>
                <el-menu-item index="4-3" route="/home/video">视频巡更</el-menu-item>
                

            </el-submenu>
            <el-submenu index="5">
                  <template slot="title">
                  <span>访客管理</span>
                  </template>
                  <el-menu-item index="5-1" route="/home/visteror">访客登记</el-menu-item>
    

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
  width: 1660px;
  float: left;
}
</style>