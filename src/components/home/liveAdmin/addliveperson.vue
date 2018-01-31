<template>
    <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
        <el-col :span="23" :offset="1" style="font-size:16px;padding-top:20px;line-height:30px;">
            {{title}}
        </el-col>
        <el-row style="width:98%;margin:0 auto;margin-top:100px;margin-left:100px;">
            <el-form :inline="true" :model="formData" label-width="80px" class="demo-ruleForm">
                <el-form-item label="业主姓名:" style="width:260px;" label-width="100px">
                    <el-input v-model.lazy="formData.name" style="width:160px;"></el-input>
                </el-form-item>
                <el-form-item label="住址:" style="width:320px;" label-width="120px">
                     <el-input v-model.lazy="formData.address" style="width:160px;"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" style="width:280px;">
                    <el-input v-model.lazy="formData.tel" style="width:160px;"></el-input>
                </el-form-item>
                    <el-form-item label="预约时间" label-width="100px">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="入住时间" v-model="formData.intime"></el-date-picker>
                            &nbsp;-&nbsp;
                            <el-date-picker type="date" placeholder="离开时间" v-model="formData.outtime"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
             
    
                <el-form-item style="width:100%;text-align:center;margin-top:20px;">
                    <el-tooltip effect="dark" content="请务必保证字段完整，不然无法添加" placement="bottom">
                        <el-button type="primary" @click="onSubmit()">提交</el-button>
                    </el-tooltip>
                </el-form-item>
            </el-form>
        </el-row>
    </div>
</template>

<script>
    let formData = {
        name: "",
        tel: "",
        intime: '',
        type:""
    };
    export default {
        data() {
            return {
                title: "添加住户",
                formData,
              
                
            };
        },
        computed:{
       
        
        },
        methods: {
            resetForm() {
                this.formData = {
                    name: "",
                    tel: "",
                    intime: '',
                    type:""
                };
            },
            onSubmit() {
                let func = new Promise((resolve, reject) => {
                    if (
                        this.formData.name != "" &&
                        this.formData.tel != "" &&
                        this.formData.intime != ""
                    ) {
                        this.$store.dispatch("timeFormat", this.formData.intime).then( (timeFormat_data)=>{
                                this.formData.intime=timeFormat_data[0];    
                        }).then((timeFormat_data)=>{
                                    var lastTime = new Date(this.formData.outtime);
                                    var today = new Date();
                                    var num = 24*60*60*1000;
                                    var timer =lastTime.getTime()-today.getTime();
                                    if(timer>0){
                                         this.formData.type ="居住中"
                                    }else{
                                        this.formData.type = "已离开"
                                    }
                                this.$store.commit('addliveperson',this.formData);
                                resolve(); 
                        })
                        
                    }
                   else{
                       reject();
                   } 
                });
                func
                    .then(() => {
                        alert("提交成功");
                        this.resetForm();
                    })
                    .catch(() => {
                        alert("请正确输入");
                        this.resetForm();
                    });
                
            }
        },
        created() {
            this.resetForm();
        }
    };
</script>
