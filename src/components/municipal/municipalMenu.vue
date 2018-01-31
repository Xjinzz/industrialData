<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/municipalMenu/projectAdmin">
                <span slot="title">工程管理</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                
                <span>环卫管理</span>
                </template>
                <el-menu-item index="2-1" route="/municipalMenu/">环卫一</el-menu-item>
                 <el-menu-item index="2-2" route="/municipalMenu/">环卫二</el-menu-item>        
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>事件管理</span>
                </template>
                <el-menu-item index="3-1" route="/municipalMenu/">事件一</el-menu-item>
                <el-menu-item index="3-2" route="/municipalMenu/">事件二</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>单位处理</span>
                </template>
                <el-menu-item index="4-1" route="/municipalMenu/">单位一</el-menu-item>
                <el-menu-item index="4-2" route="/municipalMenu/">单位二</el-menu-item>
            </el-submenu>
            <el-submenu index = "5">
                <template>
                    <span slot = "title">权限管理</span>
                </template>
                <el-menu-item index = "5-1" route = "/municipalMenu/">
                    权限一
                </el-menu-item>
                <el-menu-item index = "5-2" route = "/municipalMenu/">
                    权限二
                </el-menu-item>
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
      
    },
    pushConven(){
  
        this.$router.push("/townMenu/convenience");
    }
  },
  //组件需要导航
  // beforeRouteEnter (to, from, next) {
  //   console.log('进入组件');
  //   next();
  // },
  // beforeRouteUpdate (to, from, next) {
  //   console.log(6)
  //   console.log('更新组件');
  //   next();
    
  // },
  // beforeRouteLeave (to, from, next) {
  //    console.log('离开组件');
  //       console.log(7)
  //       next();

  // }
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
  float: left;
  background:#fff;
  height: 1030px;
  margin-left:30px;
  margin-top:20px;
}
</style>