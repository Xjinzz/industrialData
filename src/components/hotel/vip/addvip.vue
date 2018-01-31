<template>
  <div style = " background : #fff; height: 980px ; margin-top : 30px ; " >
      <el-col :span = "23" :offset = "1" style = "padding-top:20px;line-height:30px;">
          {{title}}
      </el-col>
      <el-row style= "width:98%;margin:0 auto;margin-top:100px;">
           <el-form :inline = "true" :model="formData"  label-width="80px" class="demo-ruleForm">
            <el-form-item label = "会员姓名" style="width:280px;">
                <el-input v-model = "formData.name" style="width:160px;"></el-input>
            </el-form-item>
            <el-form-item label = "身份证号码" style ="width:380px" label-width = "120px">
                <el-input v-model="formData.peo" style = "width:220px"></el-input>
            </el-form-item>
             <el-form-item label = "联系方式" style ="width:280px">
                <el-input v-model="formData.tel" style = "width:160px"></el-input>
            </el-form-item>
           <el-form-item label = "会员类型" style="width:280px;">
                <el-select v-model = "formData.viptype" placeholder = "会员类型" style="width:160px;">
                    <el-option label = "普通会员" value = "普通会员"></el-option>
                    <el-option label = "高级会员" value = "高级会员"></el-option>                    
                </el-select>
            </el-form-item>
            <el-row>
            <el-form-item label = "折扣类型">
                <el-input
                    placeholder="请选择会员类型"
                    v-model="zhe"
                    :disabled="true">
                </el-input>
            </el-form-item>
            </el-row>
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
let formData={
                name:'',
                peo:'',
                tel:'',
                viptype:'',
                zhe:'',
            }
export default {
    data(){
        return {
            title : "Q+ 早安酒店北京西云阁店 > 添加会员",
            formData,
        }
    },

    computed:{
        zhe(){
            let zhe =this.formData.viptype == "高级会员"?'8折':this.formData.viptype == "普通会员"?'9.5折':'';
            this.formData.zhe = zhe;
           return zhe;
        },  
    },
    methods: {
        resetForm(){
            this.formData = {
                name:'',
                peo:'',
                tel:'',
                viptype:'',
                zhe:'',
            }
        },
        onSubmit() {
            let func = new Promise((resolve,reject)=>{
                if(this.name !="" && this.peo!="" && this.tel !="" && this.viptype != "" && this.zhe != ""){
                    this.$store.commit('addvip',{
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
      },
      created(){
           this.resetForm();
      }
    }

</script>
