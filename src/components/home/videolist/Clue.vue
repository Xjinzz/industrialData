<template>
    <div class="clueView">
    
        <div class="pageheader">实时监控</div>
    
        <el-col :span="3">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#f2f2f2" text-color="#999" active-text-color="#ffd04b" :router="true">
                <el-submenu index="1">
                    <template slot="title">
                            <!-- <i class="el-icon-location"></i> -->
                            <span>东苑社区（4/4）</span>
</template>
                     
                        <el-col :span="24"><el-menu-item index="1-4-1" route="/home/videoed/east">社区东门-路口</el-menu-item>

                        </el-col>
                        <el-col :span="24"><el-menu-item index="1-4-2" route="/home/videoed/west">社区西门-路口</el-menu-item>
                        
                        </el-col>
                        <el-col :span="24"><el-menu-item index="1-4-3" route="/home/videoed/noth">社区南门-路口</el-menu-item>
                        
                        </el-col>
                        <el-col :span="24"><el-menu-item index="1-4-4" route="/home/videoed/center">中心花园-高速球</el-menu-item>
                        
                        </el-col>
            </el-submenu>
        </el-menu>
    </el-col>


                <el-col :span="20">
                    <div class="subview">
                            <router-view></router-view>
                    </div>
                </el-col>
        </div>
  
</template>

<script>
    export default {
        data() {
            return {
    
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo {
        height: 900px;
        margin-left: 2%;
    }
    
    .clueView {
        width: 98%;
        margin: 0 auto;
        height: 1000px;
        background: #fff;
        margin-top: 1%;
        overflow: hidden;
    }
    
    .clueView .pageheader {
        font-size: 16px;
        padding: 20px;
    }
    
    .clueView .subNav {
        width: 298px;
        height: 920px;
        background: #f5f5f5;
        float: left;
    }
    
    .clueView .subView {
        float: right;
        /* width:1390px; */
        height: 920px;
    }
    
    .subNav ul li {
        width: 100%;
        border-bottom: 0.2px solid #ccc;
        padding-bottom: 15px;
        padding-top: 15px;
        text-align: center
    }
    
    .subNav ul li span:nth-last-child(1) {
        color: #999;
        font-size: 14px;
    }
    
    .subnav li:hover {
        background: #dae7f5;
    }
</style>
