<template>
  <div style = " background : #fff; height: 980px ; margin-top : 30px ; " >
      <el-col :span = "23" :offset = "1" style = "padding-top:20px;line-height:30px;">
          {{title}}
      </el-col>
      <el-row style= "width:98%;margin:0 auto;margin-top:100px;">
           <el-form :inline = "true" :model="formData"  label-width="80px" class="demo-ruleForm">
                <el-form-item label = "管理员姓名" style="width:320px;" label-width = "120px">
                    <!-- 
                        * 这里为了区分每一个人 加入了key store中增加了，方便我们区分，所以我们虽然看到的标签是人
                        * 实际上我们提交的是她的key（key是时间戳获取）
                        *
                     -->
                    <el-select v-model = "formData.key" placeholder = "请选择" style="width:160px;">
                        <el-option  v-for = "(key,index) in adminlist" :key ="index" :label = "adminlist[index].name" :value = "adminlist[index].key"></el-option>                  
                    </el-select>
                </el-form-item>
            <!-- <el-input v-model = "formData.name" style="width:160px;"></el-input> -->
                <el-form-item label = "部门" style="width:280px;">
                    <el-select v-model = "formData.department" placeholder = "请先选择管理员" style="width:160px;" :disabled="taggle">
                        <el-option label = "财务部" value = "财务部"> </el-option>  
                        <el-option label = "运营部" value = "运营部"> </el-option>   
                        <el-option label = "人事部" value = "人事部"> </el-option>   
                        <el-option label = "销售部" value = "销售部"> </el-option>        
                    </el-select>
                </el-form-item>

             <el-form-item label = "状态" style="width:280px;">
                    <el-select v-model = "formData.status" placeholder = "请先选择管理员" style="width:160px;" :disabled="taggle">
                        <el-option label = "启用" value = "启用"> </el-option>  
                        <el-option label = "禁用" value = "禁用"> </el-option>         
                    </el-select>
                </el-form-item>
            <el-row>
                <el-form-item label = "权限授权" label-width="120px">
                 <el-checkbox-group v-model="checked"  :disabled="taggle">
                     <!-- 加边框 :border="true" -->
                    <el-checkbox v-for="option in boxOption"  :label="option" :key="option" style="color:#666;">{{option}}</el-checkbox>
                 </el-checkbox-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label = "权限操作" label-width="120px" >
                 <el-checkbox-group v-model="checked2"  :disabled="taggle">
                     <!-- 加边框 :border="true" -->
                    <el-checkbox v-for="option in boxOption2"  :label="option" :key="option" style="color:#666;">{{option}}</el-checkbox>
                 </el-checkbox-group>
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
import {mapState} from "vuex";
const Options = ["房间状态管理", "顾客登记管理", "财务管理", "会员管理"];
const Options2 = ['查看','编辑','删除'];
let formData = {
  name: "",
  type: "",
  department: "",
  status: "",
  key:'',
  jurone:'',
  jurtwo:'',
  jurthree:'',
  creat:''
};
export default {
    computed:{
      ...mapState({
         adminlist: state => state.hotelAdminList,
      }),
        key(){
            return this.formData.key;
        }
    },
    watch:{
        key(){
            this.taggle = false;
            // this.formData.department = 
            let nowdata = this.adminlist.filter((value)=>{
                return this.formData.key == value.key;
            })[0];
             this.formData = nowdata;
            if(nowdata.jurone)this.checked2.push("查看")
            if(nowdata.jurtwo)this.checked2.push("编辑")
            if(nowdata.jurthree)this.checked2.push("删除")
        },
        checked2(){
            this.formData.jurone = false;
            this.formData.jurtwo = false;
            this.formData.jurthree = false;
            
            if(this.contains(this.checked2,'查看'))this.formData.jurone = true;
            if(this.contains(this.checked2,'编辑'))this.formData.jurtwo = true;
            if(this.contains(this.checked2,'删除'))this.formData.jurthree = true;
            console.log(
                this.formData
            )
            
        }
    },
  data() {
    return {   
      title: "Q+ 早安酒店北京西云阁店 > 权限修改",
      formData,
      checked: ["房间状态管理", "顾客登记管理", "会员管理"],
      boxOption: Options,
      boxOption2:Options2,
      checked2:[],
      taggle:true,
    };
  },

  methods: {
    contains(arr, obj) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
            return true;
            }
        }
        return false;
    },
    resetForm() {
      this.formData = {
        name: "",
  type: "",
  department: "",
  status: "",
  key:'',
  jurone:'',
  jurtwo:'',
  jurthree:'',
  creat:''
    };
    
    },

    onSubmit() {
      let func = new Promise((resolve, reject) => {
        if (
          this.name != "" &&
          this.type != "" &&
          this.department != "" &&
          this.status != ""
        ) {
          this.$store.commit("purChange", this.formData);
          resolve();
        }
        reject();
      });
      func.then(() => {
          alert("提交成功");
        }).catch(() => {
          alert("请正确输入");
        });
    //   this.resetForm();

    }
  },
  created() {
    this.resetForm();
  }
};
</script>

<style>

</style>
