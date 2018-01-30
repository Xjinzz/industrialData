<template>
  <div>
      <pageheader></pageheader>
      <div class="contente">
          <p>酒店展示</p>
          <ul>
              <li v-for="i in hotel" class="show-hotel" :key = "i" :style="i.index<4?'margin-top:20px':'margin-top:30px'">
                
                  <img src="" v-lazy="i.path" :width="i.width" :height="i.height" alt="">
                  
                  <p class="hotelname">{{i.hotelname}}</p>
              </li>
          </ul>

      </div>
  </div>
</template>
<script>
const pageheader=()=>import('../pageheader.vue');
import {mapState} from 'vuex'
export default {
    data(){
        return{
          
        }
    },
        computed: mapState({
         hotel: state => state.hotel
    }),
    methods:{            
    },
  components:{
      pageheader
  }

}
</script>
<style scoped>
    .contente{
        
        width:1660px;
        height:880px;
        background:#fff;
    
        margin:0px auto;
    }
    .contente p{
        padding:10px;
        font-size:18px;
        line-height:30px;
    }
    .show-hotel{
        float: left;
        margin-left:112px;  
        text-align:center
    }
      .show-hotel img{
       border-radius:50%;
        border:5px solid #fff;
        box-sizing:border-box;
    }
    .show-hotel img:hover{
        border:0px solid #fff;
    }
    .hotelname{
        font-size:18px;
        line-height:50px;
        text-align: center;
        color:#999;
    }
</style>

