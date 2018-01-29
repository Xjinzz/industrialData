<template>
  <div style ="background:#f3f3f3">
     <convencmp mystyle = "height:72.5px" myclass="titleTagClass" :lis ="titlearr"/>
      <el-row :class = "moduleTwo">
          <el-row :class = "handleTitle">
              业务办理
          </el-row>
          <el-row>
     <el-tabs v-model="activeName" >
          <el-tab-pane label=" " index = "1" name ="">
                    
              </el-tab-pane>
              <el-tab-pane label="居住住宅用户" index = "2" name ="liveUser">
                    <convencmp mystyle = "height:72.5px" myclass="bodyTagClass" :lis ="bodyarrone"/>
                    <convencmp mystyle = "height:72.5px" myclass="bodyTagClass"  :lis ="bodyarrtwo"/>
              </el-tab-pane>
             <el-tab-pane label="工商政府用户" index = "3" name ="gszfUser">
                    <convencmp mystyle = "height:72.5px" myclass="bodyTagClass" :lis ="bodyarrthree"/>
                    <convencmp mystyle = "height:72.5px" myclass="bodyTagClass"  :lis ="bodyarrfour"/>
              </el-tab-pane>
          </el-tabs>
          </el-row>
     
      </el-row>
  </div>
</template>
    
<script>
import convencmp from './convenlistcmp'
export default {
    data(){
        return {
            moduleTwo : "handle",
            handleTitle:"handleTitle",
            activeName:"liveUser",
           
            titlearr:[
                {
                    title:'业务办理',
                    style:"background-position:0% 0%"
                },{
                    title:'查询电费',
                    style:"background-position:14.2% 0%"
                },{
                    title:'营销网点',
                    style:"background-position:28.4% 0%"
                }
            ],
            bodyarrone:[
                {
                    title:'过户',
                    style:"background-position:42.6% 0%"
                },{
                    title:'更改缴费账户',
                    style:"background-position:57% 0%"
                },{
                    title:'业扩新装',
                    style:"background-position:71.6% 0%"
                },{
                    title:'增容',
                    style:"background-position:85.8% 0%"
                }
            ],
             bodyarrtwo:[
                {
                    title:'销户',
                    style:"background-position:100% 0%"
                },{
                   style : "",
                   title:"",
                },{
                   style : "",
                   title:"",
                },{
                   style : "",
                   title:"",
                }
            ],
             bodyarrthree:[
                {
                    title:'过户2',
                    style:"background-position:42.6% 0%"
                },{
                    title:'更改缴费账户2',
                    style:"background-position:57% 0%"
                },{
                    title:'业扩新装2',
                    style:"background-position:71.6% 0%"
                },{
                    title:'增容2',
                    style:"background-position:85.8% 0%"
                }
            ],
             bodyarrfour:[
                {
                    title:'销户2',
                    style:"background-position:100% 0%"
                },{
                   style : "",
                   title:"",
                },{
                   style : "",
                   title:"",
                },{
                   style : "",
                   title:"",
                }
            ]
        }
    },
    methods:{
 
    },
    components:{
        convencmp,
    }

}
</script>

<style scoped>
  
   
    .handle {
        margin-top:30px;
        height:855px;
        background:#fff;
    }
    .handleTitle{
        font-size:25px;
        color:#333;
        line-height:70px;
        letter-spacing: 3px;
        margin-left:1em;
        font-weight: bold;
    }
   

</style>
