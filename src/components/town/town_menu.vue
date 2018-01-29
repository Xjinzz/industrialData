<template>
<div>
    <div id="menu">
      <el-col :span="24">
          <el-menu default-active="1" :router="true" :unique-opened="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" background-color="#2a3137" text-color="#98a4a6" active-text-color="#fff">
                <el-menu-item index="1" route="/townMenu/index/center">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                
                <span>人口管理</span>
                </template>
                <el-menu-item index="2-1" route="/townMenu/personAdmin">管理列表</el-menu-item>
                 <el-menu-item index="2-2" route="/townMenu/addshopstreet">人口管理</el-menu-item>
                 <el-menu-item index="2-3" route="/townMenu/addshopstreet">户籍管理</el-menu-item>
                 <el-menu-item index="2-4" route="/townMenu/addshopstreet">家庭管理</el-menu-item>
                 
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <span>居住管理</span>
                </template>

                <el-menu-item index="3-1" route="/townMenu/liveAdmin">管理列表</el-menu-item>
                <el-menu-item index="3-2" route="/townMenu/streetlist">居住管理</el-menu-item>
                <el-menu-item index="3-3" route="/townMenu/streetlist">小区管理</el-menu-item>
                <el-menu-item index="3-4" route="/townMenu/streetlist">楼盘管理</el-menu-item>
                
               
                
                

            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                <span>事件处理</span>
                </template>
                <el-menu-item index="4-1" route="/townMenu/towncasebar">预立案栏</el-menu-item>
                <el-menu-item index="4-2" route="/townMenu/addBanner">登记栏</el-menu-item>
                <el-menu-item index="4-3" route="/townMenu/addBannerPosition">回退案件</el-menu-item>
                <el-menu-item index="4-4" route="/townMenu/addBannerPosition">核查栏</el-menu-item>

            </el-submenu>
            <el-menu-item index="5" route="/townMenu/convenience">
                <span slot="title">便民服务</span>
            </el-menu-item>

             <el-menu-item index="6" route="/townMenu/bigdata">
                <span slot="title">大数据</span>
            </el-menu-item>
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
  //已测试 组件导航
  // beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log('进入组件');
  //   next();
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log(6)
  //   console.log('更新组件');
  //   next();
    
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //    console.log('离开组件');
  //       console.log(7)
  //       next();

  // }
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
  float: left;
  background:#fff;
  height: 1030px;
  margin-left:30px;
  margin-top:20px;
}
</style>