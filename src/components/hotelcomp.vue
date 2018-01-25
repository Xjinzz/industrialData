<template>
<!-- template for 全局导航 -->
    <div id="pageDiv">
        <div id="header">
          <slot name="myheader"></slot>
        </div>
        <div id="main">
            <div id="menu_index" v-if="t<5">
                <slot name="menu"></slot>
            </div>
            <div id="menut" v-else>

            </div>
            <div id="content">
                <router-view/>
            </div>
        </div>
       
     
    </div>
</template>
<script>

  
  export default {
      data(){
    return{
        t:0
    }
      },
      created () {
        //   顶级导航自动隐藏
          setInterval(() => {
              this.t=this.t+1;
              var _this=this;
               if(this.t>5){

                document.getElementById('menut').onmousemove=function(){
                    
                    _this.t=0
              
                }
            }
          }, 1000);
         
            
        
      },

  };
</script>
<style  scoped>

#pageDiv{
    width:1920px;
    margin:0 auto;
}
#header{
    width:100%;
    height:62px;

}
#main{
    width:100%;
}
#menu_index{
    width:60px;
    text-align: center;
    height:1080px;
    background:#000;
    
    color:#98a4a6;
    float:left;
    
}
#menut{
    width:60px;
    height: 1080px;
    float: left;
    background:#2a3137;
}


#content{
    background:#f5f5f5;
    float:left;
    width:1860px;
    height:1080px;
    position: relative;;
    z-index: 10;

}
#menu .el-menu-vertical-demo li:hover{
    background:#fff;
}
/* 顶级导航菜单样式 */
#menu_index .nav ul li{
    text-align:center;
    overflow: hidden; 
    text-overflow:ellipsis; 
    white-space: nowrap;
}
#menu_index .nav ul li:hover{
    background:#999;
    cursor:pointer;
}
</style>








