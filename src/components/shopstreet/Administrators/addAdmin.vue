<template>
  <div style=" background : #fff; height: 980px ; margin-top : 30px ; ">
    <el-col :span="23" :offset="1" style="padding-top:20px;line-height:30px;">
      {{title}}
    </el-col>
    <el-row style="width:98%;margin:0 auto;margin-top:100px;">
      <el-form :inline="true" :model="formData" label-width="80px" class="demo-ruleForm">
        <el-form-item label="管理员姓名" style="width:320px;" label-width="120px">
          <el-input v-model="formData.name" style="width:160px;"></el-input>
        </el-form-item>
        <el-form-item label="管理员类型" style="width:320px;" label-width="120px">
          <el-select v-model="formData.type" placeholder="请选择" style="width:160px;">
            <el-option label="普通管理员" value="普通管理员"></el-option>
            <el-option label="高级管理员" value="高级管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门" style="width:280px;">
          <el-select v-model="formData.department" placeholder="请选择" style="width:160px;">
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="销售部" value="销售部"></el-option>
            <el-option label="运营部" value="运营部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" style="width:280px;">
          <el-select v-model="formData.status" placeholder="请选择" style="width:160px;">
            <el-option label="启用" value="启用"></el-option>
            <el-option label="禁用" value="禁用"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-form-item label="权限授权" label-width="120px">
            <el-checkbox-group v-model="checked">
              <!-- 加边框 :border="true" -->
              <el-checkbox v-for="option in boxOption" :label="option" :key="option" style="color:#666;">{{option}}</el-checkbox>
            </el-checkbox-group>
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
/***
 * 商业街添加管理员
 * 
 * 
 * */ 
const Options = ["招商管理", "商城管理", "广告位管理", "数据中心"];
  let formData = {
    name: "",
    type: "",
    department: "",
    static: ""
  };
  export default {
    data() {
      return {
        title: "商业街 > 添加会员",
        formData,
        checked: ["招商管理", "商城管理", "广告位管理"],
        boxOption: Options
      };
    },
    methods: {
      resetForm() {
        this.formData = {
          name: "",
          type: "",
          department: "",
          status: ""
        };
      },
      onSubmit() {
        let func = new Promise((resolve, reject) => {
          if (
            this.formData.name != "" &&
            this.formData.type != "" &&
            this.formData.department != "" &&
            this.formData.status != ""
          ) {
            this.$store.commit("shopstreetAddAdmin", this.formData);
            resolve();
          }
          reject();
        });
        func
          .then(() => {
            alert("提交成功");
          })
          .catch(() => {
            alert("请正确输入");
          });
        this.resetForm();
      }
    },
    created() {
      this.resetForm();
    }
  };
</script>

<style>
  
</style>
