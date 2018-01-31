<template>
  <div style = " background : #fff; height: 980px ; margin-top : 30px ; " >
      <el-col :span = "23" :offset = "1" style = "padding-top:20px;line-height:30px;">
          {{title}}
      </el-col>
      <el-row style= "width:98%;margin:0 auto;margin-top:100px;">
           <el-form :inline = "true" :model="formData"  label-width="80px" class="demo-ruleForm">
               <el-row>
                    <el-form-item label = "客户姓名" style="width:280px;">
                        <el-input v-model = "formData.name" style="width:160px;"></el-input>
                    </el-form-item>
                     <el-form-item label = "身份证号" style="width:280px;">
                        <el-input v-model = "formData.peo" style="width:160px;"></el-input>
                    </el-form-item>
                    <el-form-item label = "联系方式" style="width:280px;">
                        <el-input v-model = "formData.tel" style="width:160px;"></el-input>
                    </el-form-item>
                    <el-form-item label = "已交押金" style="width:280px;">
                        <el-input v-model = "formData.meney" style="width:160px;"></el-input>
                    </el-form-item>

               </el-row>
               <el-row>
                    <el-form-item label="预约时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="formData.intime" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                         <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="formData.outtime" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
               </el-row>
             <el-row>
                 <el-col :span = "5">
                    <el-form-item label = "房间号" style="width:280px;">
                        <el-input v-model= "formData.homeNum" @blur="changePrice" style="width:160px;"></el-input>
                        <!-- <input type="text" v-model.lazy = "formData.homeNum" style="width:160px;"/> -->
                    </el-form-item>
                 </el-col>
            
                <el-col :span = "4" style= "color:#333;line-height:40px">单价：{{price}}</el-col>
                <el-col :span = "4" style= "color:#333;line-height:40px">房间类型:{{type}}</el-col>
                <el-col :span = "4" style= "color:#333;line-height:40px">位置:{{position}}</el-col>
                
                
             </el-row>
            
            <el-form-item style = "width:100%;text-align:center;margin-top:20px;">
                <el-button type="primary" @click="onSubmit()">提交</el-button>
            </el-form-item>
        </el-form>
     </el-row>
  </div>
</template>

<script>
import {mapState} from "vuex"
var formData={
                name:'',
                peo:'',
                tel:'',
                meney:'',
                homeNum:'',
                intime:'',
                outtime:'',
            }

export default {
    data(){
        return {
            title : "Q+ 早安酒店北京西云阁店 > 房间预订",
            formData, 
            price:'',
            type:'',
            position:'',
        }
    },
    
    computed:{
         ...mapState({
            homeData: state => state.homeData
        }),
        myform(){
            return this.formData;
        },
    },
    methods: {
        changePrice(){
            this.price ="";
            this.type ="";
            this.position = "";
            let filterdata = this.homeData.filter((value)=>{
                return value.homeNum == this.formData.homeNum; 
            })
            if(filterdata.length>0){   
               this.price = filterdata[0].homePrice;
               this.type = filterdata[0].homeType;
               this.position = filterdata[0].homePosition;
               
            }else{
                alert('找不到房间');

            }
        },
        onSubmit() {
            let func = new Promise((resolve,reject)=>{
                if(this.formData.name != "" && this.formData.peo != "" && this.formData.tel != "" && this.formData.meney != "" && this.price != "" && this.formData.date1!=""&&this.formData.date2!=""){
                    this.$store.commit('homelive',{
                    formData:this.formData,

                    
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
       
        },
        resetForm(){
             this.formData = {
                homeNum:'',
                homeType:'',
                grade:'',
                homePrice:'',
                homePosition:'',
            }
            this.price ="";
                this.type ="";
                this.position = "";
        }
      },
      created(){
          this.resetForm();
      }
    }

</script>

