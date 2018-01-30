
<template>
<!--  全局导航 -->
    <comp>
         <myheader slot="myheader"/>
       
          <div class="nav" slot="menu"> 
        <ul>
            <router-link :to="hotel" tag="li">
                酒店
            </router-link>
            <router-link :to="shopstreet" tag="li">
                商业街
            </router-link>
            <router-link :to="home" tag="li">
                住宅
            </router-link>
            <router-link :to="pppMenu" tag="li">
                PPP项目
            </router-link>
            <router-link :to="Industrial" tag="li">
                产业园
            </router-link>
          
            <router-link :to="townMenu" tag="li">
                城镇
            </router-link>
            <router-link :to="municipalMenu" tag="li">
                市政
            </router-link>
            <router-link :to="hotel" tag="li">
                大数据
            </router-link>
        </ul>
        
    </div>
       
    </comp>
  
</template>

<script>
import comp from "./hotelcomp.vue";
import myheader from "./header.vue";
export default {
    data(){
        return{
            hotel:'/hotel',
            home:'/home',
            shopstreet:'/shopstreet',
            Industrial:'/Industrial',
            pppMenu:"/ppp",
            townMenu:"/townMenu",
            municipalMenu:"/municipalMenu",
        }
    },
    components: {
        comp,myheader
    }
}
</script>

<style scoped>
    .nav{
        position: relative;
        color:#fff;

    }
    .nav ul li{
        width:56px;
        height: 90px;
        line-height:96px;
        background:#000;
        color:#fff;
        
        
    }


</style>

