<template>
    <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
        <el-col :span="23" :offset="1" style="font-size:16px;padding-top:20px;line-height:30px;">
            {{title}}
        </el-col>
        <el-row style="width:98%;margin:0 auto;margin-top:100px;margin-left:100px;">
            <el-form :inline="true" :model="formData" label-width="80px" class="demo-ruleForm">
                <el-form-item label="姓名:" style="width:260px;" label-width="100px">
                    <el-input v-model.lazy="formData.name" style="width:160px;"></el-input>
                </el-form-item>
                <el-form-item label="所在部门:" style="width:320px;" label-width="120px">
                     <el-select v-model="formData.department" placeholder="请选择" style="width:160px;">
                        <el-option label="财务" value="财务部"></el-option>
                        <el-option label="人事" value="人事部"></el-option>
                        <el-option label="产品" value="产品部"></el-option>
                        <el-option label="销售" value="销售部"></el-option>                        
                    </el-select>
                </el-form-item>
                <el-form-item label="职位" style="width:280px;">
                    <el-select v-model="formData.chenghu" placeholder="请选择" style="width:160px;">
                        <span v-for = "item in chenghu" ><el-option :label="item" :value="item"></el-option></span>
                    </el-select>
                </el-form-item>
 
                 <el-form-item label="电话:" style="width:260px;" label-width="100px">
                    <el-input v-model.lazy="formData.tel" style="width:160px;"></el-input>
                </el-form-item>
                <el-row style = "margin-top:30px;">
                    <el-form-item label="在职时间" label-width="100px">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="入职时间" v-model="formData.intime"></el-date-picker>
                            &nbsp;-&nbsp;
                            <el-date-picker type="date" placeholder="离职时间" v-model="formData.outtime"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-row>
    
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
        department: "",
        name: "",
        chenghu: "",
        tel: "",
        intime: '',
        outtime: '',
        staic:""
    };
    export default {
        data() {
            return {
                title: "添加车辆",
                formData,
              
                
            };
        },
        computed:{
            chenghu(){
                switch(this.formData.department){
                    case "财务部" : return ['初级会计','中级会计','高级会计'];break;
                    case "人事部" : return ['初级人事','中级人事','高级人事'];break;
                    case "产品部" : return ['初级产品','中级产品','高级产品'];break;
                    case "销售部" : return ['初级销售','中级销售','高级销售'];break;
                    default :return [];break; 
                }
            }
        },
        methods: {
            resetForm() {
                this.formData = {
                    department: "",
                    name: "",
                    chenghu: "",
                    tel: "",
                    intime: '',
                    outtime: '',
                    staic:"",
                };
            },
            onSubmit() {
                let func = new Promise((resolve, reject) => {
                    if (
                        this.formData.department != "" &&
                        this.formData.name != "" &&
                        this.formData.chenghu != "" &&
                        this.formData.tel != "" &&
                        this.formData.outtime != "" &&
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
                                         this.formData.staic ="在职"
                                    }else{
                                        this.formData.staic = "离职"
                                    }
                                this.$store.commit('addpersonouser',this.formData);
                                resolve(); 
                        })
                        
                    }
                    reject();
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
