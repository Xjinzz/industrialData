<template>
  <div style = " background : #fff; height: 980px ; margin-top : 30px ; " >
      <el-col :span = "23" :offset = "1" style = "padding-top:20px;line-height:30px;">
          {{title}}
      </el-col>
      <el-row style= "width:98%;margin:0 auto;margin-top:100px;">
           <el-form :inline = "true" :model="myform"  label-width="80px" class="demo-ruleForm">
            <el-form-item label = "房间号" style="width:280px;">
                <el-input v-model = "formData.homeNum" style="width:160px;"></el-input>
            </el-form-item>
           <el-form-item label = "房间类型" style="width:280px;">
                <el-select v-model = "formData.homeType" placeholder = "房间类型" style="width:160px;">
                    <el-option label = "客房" value = "客房"></el-option>
                    <el-option label = "其他" value = "其他"></el-option>                    
                </el-select>
            </el-form-item>
            <el-form-item label = "房间档次" style="width:280px;">
                <el-select v-model = "formData.grade" placeholder = "房间档次" style="width:160px;">
                    <el-option label = "普通单间" value = "普通单间"></el-option>
                    <el-option label = "普通标间" value = "普通标间"></el-option>
                    <el-option label = "豪华单间" value = "豪华单间"></el-option>                 
                    <el-option label = "豪华标间" value = "豪华标间"></el-option>                 
                                     
                </el-select>
            </el-form-item>
             <el-form-item label = "单价" style="width:280px;">
                <el-input v-model = "formData.homePrice" style="width:160px;"></el-input>
            </el-form-item>
            <el-form-item label = "房间位置" style="width:280px;"> 
                <el-select v-model = "formData.homePosition" placeholder = "房间位置" style="width:160px;">
                    <el-option label = "坐北朝南" value = "坐北朝南"></el-option>
                    <el-option label = "坐西朝东" value = "坐西朝东"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style = "width:100%;text-align:center;margin-top:20px;">
                <el-tooltip effect="dark" content="请务必保证字段完整，不然无法添加" placement="bottom">
                        <el-button type="primary" @click="onSubmit()">提交</el-button>
                        
                        
                 </el-tooltip>
            </el-form-item>
        </el-form>
     </el-row>
  </div>
</template>

<script>
var formData={
                homeNum:'',
                homeType:'',
                grade:'',
                homePrice:'',
                homePosition:'',
            }
export default {
    data(){
        return {
            title : "Q+ 早安酒店北京西云阁店 > 添加房间",
            formData,
        }
    },
    created(){
        this.resetForm();
    },
    computed:{
        myform(){
            return this.formData;
        }
    },
    methods: {
        resetForm(){
                this.formData = {
                    homeNum:'',
                    homeType:'',
                    grade:'',
                    homePrice:'',
                    homePosition:'',
                }
        },
        onSubmit() {
            let func = new Promise((resolve,reject)=>{
                if(this.formData.homeNum != "" && this.formData.homeType != "" && this.formData.grade != "" && this.formData.homePrice != "" && this.formData.homePosition != ""){
                    this.$store.commit('addHome',{
                    formData:this.formData
                    
                })
                resolve();
                }
                reject();
            })
            func.then(()=>{
                alert('提交成功');
            }).catch(()=>{
                alert('请正确输入');
            });
          
            this.resetForm();
            
       
        }
      }
    }

</script>
