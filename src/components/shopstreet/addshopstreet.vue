<template>
    <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
        <el-col :span="23" :offset="1" style="padding-top:20px;line-height:30px;">
            {{title}}
        </el-col>
        <el-row style=" width: 98%;margin: 0 auto;margin-top:100px;">
            <el-form :inline="true" :model="formData" label-width="80px">
                <el-form-item label="商铺地点" style="width:280px;">
                   <el-input v-model="formData.adds" style="width:180px;"></el-input>
                </el-form-item>
                 <el-form-item label="楼盘名称" style="width:280px;">
                   <el-input v-model="formData.name" style="width:180px;"></el-input>
                </el-form-item>
                <el-form-item  label="添加照片" style="width:180px;">
                    <!-- action提交的地址 -->
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <!-- 缩略图 -->
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="商铺价格" style="width:320px;" label-width="120px">
                    <el-select v-model="formData.price" placeholder="请选择" style="width:180px">
                        <el-option label="10万元" value="10万元"></el-option>
                        <el-option label="20万元" value="20万元"></el-option>
                        <el-option label="30万元" value="30万元"></el-option>
                        <el-option label="40万元" value="40万元"></el-option>

                    </el-select>
                </el-form-item>
                 <el-form-item label="商铺类型" style="width:320px;" label-width="120px">
                    <el-select v-model="formData.type" placeholder="请选择" style="width:180px">
                        <el-option label="住宅底层" value="住宅底层"></el-option>
                        <el-option label="写字楼" value="写字楼"></el-option>
                        <el-option label="商业楼" value="商业楼"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 暂时将物业费直接给到装修费的参数 -->
                 <el-form-item label="物业费" style="width:280px;" label-width="80px">
                    <el-select v-model="formData.xiu" placeholder="请选择" style="width:180px">
                        <el-option label="5.00元／平方米" value="5.00元／平方米"></el-option>
                        <el-option label="10.00元／平方米" value="10.00元／平方米"></el-option>
                        <el-option label="15.00元／平方米" value="15.00元／平方米"></el-option>
                    </el-select>
                </el-form-item>
                  <el-row>
                    <el-form-item label="配套设施" label-width="80px">
                        <el-checkbox-group v-model="checked">
                        <!-- 加边框 :border="true" -->
                        <el-checkbox v-for="option in boxOption" :label="option" :key="option" style="color:#666;">{{option}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-row>
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
        name: "",
        num: "",
        adds: "",
        price: '',
        type: "",
        zhuang:"精装",
        xiu:"",
        staic:"",
        comData:{
          proname: '无',
          addstitle: '无',
          addssubtitle: '无',
          shoptype: '无',
          comptype: '无',
          comin: '无',
          shopfrom: '无 ',
        }
    }
    const Options = ["货梯", "扶梯", "暖气", "空调", "水", "停车位", "燃气","网络"];
    export default {
        data() {
            return {
                title: '添加商铺',
                formData,
                imageUrl: '',
                 checked: [],
                 boxOption: Options
            }
        },
        watch:{
            checked(){
                this.formData.staic = this.checked.join('、');
            }
        },

        methods: {
            resetForm() {
                this.formData = {
                    name: "",
                    num: "无数据",
                    adds: "",
                    price: '',
                    type: "",
                    zhuang:"精装",
                    xiu:"",
                    staic:"",
                    comData:{
                    proname: '无',
                    addstitle: '无',
                    addssubtitle: '无',
                    shoptype: '无',
                    comptype: '无',
                    comin: '无',
                    shopfrom: '无 ',
                    }
                }
            },
           handleAvatarSuccess(res, file) {
                    this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            onSubmit() {
                let func = new Promise((resolve, reject) => {
                    if (this.formData.adds != "" && 
                        this.formData.name != "" && 
                        this.formData.price != "" &&
                        this.formData.type != "" &&                        
                        this.formData.xiu != ""
                    ) {
                        this.$store.commit("addshowstreet", {
                                formData:this.formData,
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
<style scoped>
 .avatar-uploader .el-upload {
    /* border: 1px dashed #d9d9d9; */
    /* border-radius: 6px; */
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
      font-weight:800;
    color: #8c939d;
    background:#efefef;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
    display: block;
  }
</style>
