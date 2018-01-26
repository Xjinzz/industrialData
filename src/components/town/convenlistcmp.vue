<template>
  <div>

        <el-row type = "flex" justify = "space-around" align = "middle" :class="myclass" tag ="ul">
               
                <el-col v-for = "(li,index) in lis" v-if="li.style !=''?true:false" :key = "index" tag = "li" :span = "4">
                    <el-row type = "flex" justify="center" :style = "mystyle" align = "middle">
                        <span>{{li.title}}</span><br/>
                    </el-row>
                    <el-row type = "flex" justify="center" style = "height:72.5px" align = "middle">
                        <div :class="bgicon" :style ="li.style"></div>
                    </el-row>
                </el-col>
                <el-col v-else tag = "div" :span = "4">
                   
                </el-col>
            
        </el-row>





  </div>
</template>

<script>
export default {
    props : ["mystyle","lis","myclass"],
    data(){
        return {
              bgicon:"bgicon",
              
        }
    }
}
</script>

<style scoped>
  
    .titleTagClass li {
        height:145px;
       
        text-align:center;
        background:#fff;

    }
     .bgicon{
        width:53px;
        height:53px;
        background:url("../../../static/img/town/icon.png") no-repeat;
    }
      .bodyTagClass li {
        height:145px;
       color:#ccc;
        text-align:center;
        background:#f3f3f3;
        margin-top:30px;

    }
</style>
