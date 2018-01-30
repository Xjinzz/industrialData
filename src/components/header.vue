<template>
<!-- this is a template for header -->
  <div>
      <div class="headerleft">
          <img src="../../static/img/header.jpg" alt="">
      </div>
      <div class="headerright">
          <ul>
              <li v-for = "(path,index) in imgsrc" :key="index"><img v-lazy="path" alt="">
              
              <div></div></li>

          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgsrc: [
        "static/img/user.png",
        "static/img/shezhi.png",
        "static/img/shutdown.png"
      ]
    };
  }
};
</script>
<style scope>
.headerleft {
  width: 626px;
  display: inline-block;
}
.headerright {
  width: 508px;
  display: inline-block;
  float: right;
}
.headerright ul li {
  float: left;
  width: 32%;
  border-left: 1px solid #eee;
  height: 64px;
  text-align: center;
}
.headerright ul li img {
  margin-top: 20px;
}
</style>
