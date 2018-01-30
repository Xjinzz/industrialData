<template>
  <el-container style="height:1080px;">
      <el-col class="center_img">
          <img src="" v-lazy="path" height="950px" alt="">
      </el-col>
  </el-container>
</template>

<script>
export default {
    data(){
        return {
            path : "static/img/home/index.png"
        }
    }
}
</script>

<style scoped>
    .center_img{
  display: -webkit-flex; /* Safari */
        display: flex;
        justify-content:center;
        align-items:center;
    }
</style>
