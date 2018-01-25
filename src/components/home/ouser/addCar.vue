<template>
    <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
        <el-col :span="23" :offset="1" style="padding-top:20px;line-height:30px;">
            {{title}}
        </el-col>
        <el-row style="width:98%;margin:0 auto;margin-top:100px;margin-left:100px;">
            <el-form :inline="true" :model="formData" label-width="80px" class="demo-ruleForm">
                <el-form-item label="车牌号:" style="width:260px;" label-width="100px">
                    <el-input v-model.lazy="formData.carnum" style="width:160px;"></el-input>
                </el-form-item>
                <el-form-item label="车主:" style="width:320px;" label-width="120px">
                    <el-input v-model.lazy="formData.name" style="width:160px;"></el-input>
                </el-form-item>
                <el-form-item label="卡类型" style="width:280px;">
                    <el-select v-model="formData.cordtype" placeholder="请选择" style="width:160px;">
                        <el-option label="月租卡A" value="月租卡A"></el-option>
                        <el-option label="月租卡B" value="月租卡B"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="车照" style="width:280px;">
                    <el-col style="width:160px;background:#eee;color:#409dff">&nbsp;&nbsp;查看</el-col>
                </el-form-item>
                <el-row>
                    <el-form-item label="入驻时间" label-width="100px">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="入场日期" v-model="formData.innertime"></el-date-picker>
                            &nbsp;-&nbsp;
                            <el-date-picker type="date" placeholder="离场日期" v-model="formData.outertime"></el-date-picker>
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
        carnum: "",
        name: "",
        cordtype: "",
        inimg: "",
        innertime: '',
        outertime: ''
    };
    export default {
        data() {
            return {
                title: "添加车辆",
                formData,
            };
        },
        methods: {
            resetForm() {
                this.formData = {
                    carnum: "",
                    name: "",
                    cordtype: "",
                    inimg: "",
                    innertime: '',
                    outertime: ''
                };
            },
            onSubmit() {
                let func = new Promise((resolve, reject) => {
                    if (
                        this.formData.carnum != "" &&
                        this.formData.name != "" &&
                        this.formData.cordtype != "" &&
                        this.formData.innertime != "" &&
                        this.formData.outertime != ""
                    ) {
                        this.$store.dispatch("timeFormat", this.formData.innertime).then( (timeFormat_data)=>{
                                this.formData.innertime=timeFormat_data;
                        }).then(()=>{
                             this.$store.dispatch("timeFormat", this.formData.outertime).then((timeFormat_data)=>{
                                    this.formData.outertime=timeFormat_data;
                                })
                        }).then(()=>{
                            this.$store.commit('addCar',{
                                formData:this.formData,
                                sign:"addCar"
                            });
                             resolve();
                        });

                       
                    }else{
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

<style>
    
</style>
