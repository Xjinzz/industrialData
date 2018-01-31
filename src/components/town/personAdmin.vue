<template>
  <div>
      <el-col>
          <el-col :span="3" style ="line-height:100px;font-weight:800;font-size:20px;margin-left:30px;">
              管理列表
          </el-col>
           <el-col tag = "p" style ="color:#999" :span = "20">
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
        <el-col :span = "24">
            <img src="" v-lazy="imgpath" alt="">
        </el-col>
      </el-col>
  </div>
</template>

<script>
export default {
    data(){
        return {
             activeIndex: '1',
        buttonone:"数据导出",
        buttontwo:"请选择小区",
        buttonthree:"请选择街道",
        buttonfour:"高新区",
        imgpath :  'static/img/town/2.jpg'
        }
    },
    methods:{
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
    }
}
</script>

