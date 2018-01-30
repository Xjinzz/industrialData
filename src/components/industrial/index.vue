<template>
  <div style="background:#f5f5f5"> 
      <header>
              <div>
                  <p>新增楼宇房源</p>
                  <p style="background:#1598db"><img src="" v-lazy="path[0]" style="margin-top:12px;" alt=""></p>
                  
              </div>
              <div>
                       <p>新增网点房源</p>
                  <p style="background:#feb867"><img src="" v-lazy="path[1]" style="margin-top:14px;" alt=""></p>
                  
              </div>
              <div>
                    <p>新增客户</p>
                  <p style="background:#41aa68"><img src="" v-lazy="path[2]" style="margin-top:14px;" alt=""></p>
                  
              </div>
              <div>
                   <p>新增合同</p>
                  <p style="background:#f9e369"><img src="" v-lazy="path[3]" style="margin-top:14px;" alt=""></p>
                  
              </div>
      </header>
      <div class="continer">
          <div class="c_l">
              <el-col :span="24" tag="p" style="margin:0;">我的待办</el-col>
            <el-col :span=24>
                <table class="contentTable">
                    <tr>
                        <td>客户跟进({{totalFollow}})</td>
                        <td>合同修改({{totalContract}})</td>
                        <td>合同审核({{totalShen}})</td>
                        <td>财务结算({{totalFinancial}})</td>
                    </tr>
                     <tr>
                        <td>今日跟进({{follow}})</td>
                        <td>新增审核失败({{contract}})</td>
                      <td>新增审核({{shen}})</td>
                        <td>待收保障金({{settlement}})</td>
                    </tr>
                     <tr>
                        <td>3天内跟进({{followed}})</td>
                        <td>退租审核失败({{contractdd}})</td>
                          <td>退租审核({{shened}})</td>
                        <td>30天内收租租金({{settlemented}})</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>退租结算({{tuied}})</td>
                    </tr>
                </table>
            </el-col>
              
          </div>
          <div class="c_r">
              <el-row style="border-bottom:1px solid #ddd;">
                  <el-col :span="24" tag= "p" style="font-size:20px;line-height:40px;color:#666">&nbsp;&nbsp;消息</el-col>
                  <el-col :span="5" tag="p" style="color:#bbb;font-size:18px;">&nbsp;&nbsp;退租已结清</el-col>
                  <el-col :span="5" tag="p" :offset="13" style="color:#ccc;">2018-01-02</el-col>
                    <el-col :span="5" tag="p" :offset="19">
                        <el-col :span="12" style="color:#b9cdfb;cursor:pointer">查看</el-col>
                        <el-col :span="12" style="color:#b9cdfb;cursor:pointer">删除</el-col>
                        
                    </el-col>
                </el-row>
                <el-row style="margin-top:10px;">
                  <el-col :span="5" tag="p" style="color:#bbb;font-size:18px;">&nbsp;&nbsp;退租已结清</el-col>
                  <el-col :span="5" tag="p" :offset="13" style="color:#ccc;">2017-12-31</el-col>
                    <el-col :span="5" tag="p" :offset="19">
                        <el-col :span="12" style="color:#b9cdfb;cursor:pointer">查看</el-col>
                        <el-col :span="12" style="color:#b9cdfb;cursor:pointer">删除</el-col>
                        
                    </el-col>
              </el-row>
          </div>
          
      </div>
      

  </div>
</template>

<script>
export default {
    data(){
        return {
           follow:3,
            contract:1,
            shen:1,
            settlement:0,
            followed:2,
            contractdd:1,
            shened:1,
            settlement:0,
            tuied:0,
            settlemented:0,
            path : [
                'static/img/industrial/icon1.png','static/img/industrial/icon2.png','static/img/industrial/icon3.png','static/img/industrial/icon4.png'
            ]
        }
    },
    computed:{
        totalFollow(){
            return this.follow + this.followed;
        },
        totalContract(){
            return this.contract + this.contractdd;
        },
        totalShen(){
            return this.shen + this.shened
        },
        totalFinancial(){
            return this.settlement+this.settlemented+this.tuied
        }
    }
}
</script>

<style scoped>
    header{
        width:100%;
        display: flex;
        display: -webkit-flex;
        flex-wrap:wrap;
        height:188px;
        justify-content:space-around;
      
    }
     header div{
         flex-grow:0;
         flex-shrink:1;
         background:#fff;
         width:20%;
         height:146px;
         align-self:center;
         text-align: center;
     }
     header div p {
         font-size:16px;
         color:#999999;
         line-height:60px;
         letter-spacing: 0.3em;
           text-align: center;
     }
      header div p:nth-child(2){
          display: inline-block;
          width:54px;
          height: 54px;
          border-radius: 50%;
       
      }
      .continer{
          width:100%;
          display: flex;
          display: -webkit-flex;
          /* flex-wrap:wrap; */
          height: 808px;
          margin-top:20px;
          justify-content: space-between;
      }
      .continer .c_l{
        width:1080px;
        height:808px;
        /* background:#333; */
      }
      .continer .c_r{
        width:500px;
        height:808px;
        background:#fff;
      }
      .c_l p {
          font-size:18px;
          line-height: 60px;
          text-indent:0.5em;
          background:#fff;
          color:#666;

      }
      .contentTable{
          width:100%;
          margin-top:0;
      }
      .contentTable tr {
          width:100%;
          text-align: center;
          line-height:59px;
          background:#fff;
          color:#aaa;
          letter-spacing:0.1em;
          font-size:14px;
      }
      .contentTable tr:first-child{
          letter-spacing: 0.2em;
          font-size:16px;
          background:none;
      }
    

      </style>
