<template>
<div>
    <el-container class="maincontent">
         <el-header class="maintitle">商家入驻</el-header>
        <el-main>
            <ul class="main-content">
                <li v-for = "i in shopstreetHome" :key = "i" >             
                  <img src="" v-lazy="i.path" :width="i.width" :height="i.height" alt="">
                  <p>{{ i.shopstreetHome }}</p>
                </li>
            </ul>
            
            
        </el-main>
           <el-row style="height:20px;background:#f3f3f3;"></el-row>
        <el-header class="maintitle">消息通知</el-header>
        <el-main>
            <el-row>
                <el-col :span="22" :offset="1">
                    <el-col :span="5" class="message">
                        <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">即将到期的店铺</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="border-radius:50%;background:#1598db;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon1.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">143</b> 个
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="5" :offset="1" class="message">
                          <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">新增的商家</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="height:50px;border-radius:50%;background:#feb867;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon2.png" alt="" width="100%" style="margin-top:-3px;">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">298</b> 个
                            </el-col>
                        </el-row>

                    </el-col>
                      <el-col :span="5" :offset="1" class="message">
                          <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">新增的店铺</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="border-radius:50%;background:#1598db;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon3.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">325</b> 个
                            </el-col>
                        </el-row>

                    </el-col>
                      <el-col :span="5" :offset="1" class="message">
                             <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">费用支出</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="4" style="border-radius:50%;background:#41aa68;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon4.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">54639</b> 万元
                            </el-col>
                        </el-row>

                    </el-col>
                      <el-col :span="5" class="message">
                                       <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">即将到期的广告铺</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="border-radius:50%;background:#1598db;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon5.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">328</b> 个
                            </el-col>
                        </el-row>

                    </el-col>
                      <el-col :span="5" :offset="1" class="message">
                            <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">新增的广告</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="border-radius:50%;background:#feb867;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon6.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">172</b> 个
                            </el-col>
                        </el-row>

                    </el-col>
                      <el-col :span="5" :offset="1" class="message">
                             <el-row>
                            <el-col :span="24" style="text-align:center;color:#999;margin-top:20px;">新增的广告位</el-col>
                        </el-row>
                        <el-row style="margin-top:30px;">
                            <el-col :span="4" :offset="6" style="border-radius:50%;background:#1598db;padding:10px;">
                                <img src="../../../static/img/shopstreet/icon7.png" alt="" width="100%">
                            </el-col>
                            <el-col :span="12" :offset="1" style="font-size:16px;line-height:50px;">
                                <b style="font-size:30px;">291</b> 个
                            </el-col>
                        </el-row>

                    </el-col>
                </el-col>
            </el-row>
            
            
        </el-main>




    </el-container>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:mapState({
        shopstreetHome : (state) =>state.shopstreetHome
    })
}
</script>

<style scoped>
.message{
    height: 150px;
    margin-top:40px;
    background:#f5f5f5;
}
    .maincontent .maintitle{
        padding-top:10px;
        font-size: 18px;
        line-height: 40px;
        color:#999;
    }
    .main-content li{
        width:284px;
        float: left;
        margin-left:80px;
        text-align: center;
    }
    .main-content li img:hover{
       transform: scale(1.02);
        -webkit-transform:scale(1.02);
        -moz-transform:scale(1.02);
       cursor: pointer;
    }
    .main-content li p{
        margin-top:10px;
        color:#999;
    }
    
</style>
