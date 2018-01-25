<template>
    <el-row>
        <el-col tag = "div" >
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              
                    <el-menu-item style = "margin-left:30px;margin-right:20px;color:#666" index="1">实时监控</el-menu-item>
                    <el-menu-item style = "margin-right:20px;color:#666;" index="2">录像回放</el-menu-item>
                    <el-menu-item style = "color:#666" index="3">视频巡更</el-menu-item>
            </el-menu>
        </el-col>
        <el-col tag = "p" style ="color:#999">
            <el-dropdown  @command="handleCommand" style = "margin-top:30px;float:right;margin-right:30px;">
           <el-button round style="color:#999;" ref = "button_one">{{buttonone}}<i class="el-icon-caret-bottom"></i></el-button>
                    <el-dropdown-menu slot="dropdown" style = "width:200px;">
                        <el-dropdown-item command="数据导出">数据导出</el-dropdown-item>
                        <el-dropdown-item command="数据下载">数据下载</el-dropdown-item>                        
                        <el-dropdown-item command="数据导入">数据导入</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button round style = "color:#999;margin-top:30px;float:right;margin-right:10px;">添加</el-button>
             <el-button round style = "color:#999;margin-top:30px;float:right;margin-right:10px;">搜索</el-button>
                <el-dropdown  @command="clickQuarters" style = "margin-top:30px;float:right;margin-right:30px;">
            <el-button round style="color:#999;" ref = "button_one">{{buttontwo}}<i class="el-icon-caret-bottom"></i></el-button>
                        <el-dropdown-menu slot="dropdown" style = "width:200px;">
                            <el-dropdown-item command="小区一">小区一</el-dropdown-item>
                            <el-dropdown-item command="小区二">小区二</el-dropdown-item>                        
                            <el-dropdown-item command="小区三">小区三</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                    <el-dropdown  @command="clickStreet" style = "margin-top:30px;float:right;margin-right:30px;">
            <el-button round style="color:#999;" ref = "button_one">{{buttonthree}}<i class="el-icon-caret-bottom"></i></el-button>
                        <el-dropdown-menu slot="dropdown" style = "width:200px;">
                            <el-dropdown-item command="街道一">街道一</el-dropdown-item>
                            <el-dropdown-item command="街道二">街道二</el-dropdown-item>                        
                            <el-dropdown-item command="街道三">街道三</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                       <el-dropdown  @command="clickRegion" style = "margin-top:30px;float:right;margin-right:30px;">
            <el-button round style="color:#999;" ref = "button_one">{{buttonfour}}<i class="el-icon-caret-bottom"></i></el-button>
                        <el-dropdown-menu slot="dropdown" style = "width:200px;">
                            <el-dropdown-item command="高新区">高新区</el-dropdown-item>
                            <el-dropdown-item command="朝阳区">朝阳区</el-dropdown-item>                            
                            <el-dropdown-item command="大兴区">大兴区</el-dropdown-item>                        
                            <el-dropdown-item command="海淀区">海淀区</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
               
        </el-col>
        <el-col style ="background:#999;color:#fff;text-align:center;line-height:60px;font-size:20px;">
            {{buttonfour}}
        </el-col>
        <el-col :span = "3" style = "margin-top:10px;margin-left:10px;">
            <el-menu default-active="1" style ="height:800px;" class="el-menu-vertical-demo" background-color="#f2f2f2" text-color="#999" active-text-color="#ffd04b" :router="true">
             
                        <el-col :span="24"><el-menu-item index="1-1" route="/townMenu/index/center">太平中路</el-menu-item>

                        </el-col>
                        <el-col :span="24"><el-menu-item index="1-2" route="/townMenu/index/nosth">太平南路</el-menu-item>
                        
                        </el-col>
                        <el-col :span="24"><el-menu-item index="1-3" route="/townMenu/index/east">太平东路</el-menu-item>
                        
                        </el-col>
                 
           
            </el-menu>
        </el-col>
        <el-col :span="17">
        <router-view id="loginview" style = "width:100%;height:750px;"></router-view>
        </el-col>
        <el-col :span="1" style ="margin-left:60px;">
             <el-col style ="margin-top:50px;"><el-button round style ="background:#efefef;color:#999;">查看多个监控</el-button></el-col>
             <el-col style ="margin-top:10px;"><el-button round style ="background:#efefef;color:#999;">查看监控信息</el-button></el-col>

        </el-col>
    </el-row>
  

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        buttonone:"数据导出",
        buttontwo:"请选择小区",
        buttonthree:"请选择街道",
        buttonfour:"高新区",
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        //   可以在此处添加编程导航 以修改页面位置 router.push(...)
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
        this.buttonone = command
        
      },
        clickQuarters(command) {
            this.$message('click on item ' + command);
            this.buttontwo = command
        
      },
      clickRegion(command){
            this.$message('click on item ' + command);
            this.buttonfour = command
      },
    clickStreet(command){
            this.$message('click on item ' + command);
            this.buttonthree = command
      }

    },
    components:{
        
    }
  }
</script>

<style scope>
     .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 15px;
  }
</style>
