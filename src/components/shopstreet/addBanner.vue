<template>
    <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
        <el-col :span="23" :offset="1" style="padding-top:20px;line-height:30px;">
            {{title}}
        </el-col>
        <el-row style=" width: 98%;margin: 0 auto;margin-top:100px;">
            <el-form :inline="true" :model="formData" label-width="80px">
                <el-form-item label="广告名称" style="width:280px;">
                   <el-input v-model="formData.num" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item label="广告位地点" style="width:320px;" label-width="120px">
                    <el-select v-model="formData.bannerposition" placeholder="请选择地点" style="width:180px">
                        <el-option label="优盛大厦" value="优盛大厦"></el-option>
                        <el-option label="世纪科贸大厦" value="世纪科贸大厦"></el-option>
                        <el-option label="财智国际大厦" value="财智国际大厦"></el-option>
                        <el-option label="创新大厦" value="创新大厦"></el-option>
                        <el-option label="搜狐媒体大厦" value="搜狐媒体大厦"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="版位类型" style="width:280px;">
                    <el-select v-model="formData.bannertype" placeholder="请选择类型" style="width:180px">
                        <el-option label="轮播图" value="轮播图"></el-option>
                        <el-option label="VR视频广告" value="VR视频广告"></el-option>
                        <el-option label="文字广告" value="文字广告"></el-option>
    
                    </el-select>
                </el-form-item>
                <el-form-item label="广告价格" style="width:320px;">
                    <el-input placeholder="请输入价格" v-model.number="formData.price" :clearable="true" style="width:220px">
                        <template slot="append">元／天</template>
                    </el-input>
                </el-form-item>
                <el-form-item label = "投放时间" style="320px" label-width="120px;">
                       <el-select v-model="formData.lasttime" placeholder= "请选择期限" style="width:180px">
                           <el-option label = "1天" value= "1天"></el-option>
                           <el-option label = "7天" value= "7天"></el-option>   
                           <el-option label = "14天" value= "14天"></el-option>
                           <el-option label = "21天" value= "21天"></el-option>
                           <el-option label = "30天" value= "30天"></el-option>                                                                                                 
                                                                                                     
                       </el-select>
                </el-form-item>
                <el-row>
                     <el-form-item style = "width:100%;text-align:center;margin-top:20px;">
                        <el-tooltip effect="dark" content="请务必保证字段完整，不然可能无法提交" placement="bottom">
                            <el-button type="primary" @click="onSubmit()">提交</el-button>
                        </el-tooltip>
                    </el-form-item>
                </el-row>
            </el-form>
      </el-row>
    
  </div>
</template>

<script>
    let formData = {
        bannerposition: "",
        bannertype: "",
        price: "",
        lasttime: '',
        num: ""
    }
    export default {
        data() {
            return {
                title: '添加广告',
                formData,
            }
        },
  

        methods: {
            resetForm() {
                this.formData = {
                    bannerposition: "",
                    bannertype: "",
                    price: "",
                    lasttime: '',
                    num: ""
                }
            },
            onSubmit() {
                let func = new Promise((resolve, reject) => {
                    if (this.formData.bannerposition != "" && 
                        this.formData.bannertype != "" && 
                        this.formData.price != "" &&
                        this.formData.lasttime != "" && 
                        this.formData.num != ""
                    ) {
                        this.$store.commit("addBanner", {
                                formData:this.formData,
                                // num判断是投放还是招商
                                num:2,
                        });
                        resolve();
                    }
                    reject()
                })
                func.then(() => {
                    alert("提交成功");
                }).catch(() => {
                    
                    alert("请正确输入");
                })
                this.resetForm();
            }
        },
        created() {
            this.resetForm();
        }
    }
</script>
