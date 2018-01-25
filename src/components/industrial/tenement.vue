<template>
    <!-- <div>{{count}}</div> -->
    <div>
        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#666666" open="all">
            <el-col :span="23" :offset="1" class="pagetitle">楼宇管理</el-col>
            <el-menu-item index="all">所有</el-menu-item>
            <el-menu-item index="北京">北京</el-menu-item>
            <el-menu-item index="上海">上海</el-menu-item>
            <el-menu-item index="广州">广州</el-menu-item>
            <el-menu-item index="深圳">深圳</el-menu-item>
        </el-menu>
        <el-row :span="24">
            <el-col :span="6" style ="text-align:center">
                      <p class="contentTitle">{{cityname}}</p>
                      <div class="homesnum">{{homesnum}}</div>
            </el-col>
             <el-col :span="6" style ="text-align:center">
                      <p class="contentTitle">{{cityacreage}}</p>
                      <div class="homesnum">{{homesacreage}}</div>
            </el-col>
             <el-col :span="6" style ="text-align:center">
                      <p class="contentTitle">{{lendednum}}</p>
                      <div class="homesnum">{{homeslended}}</div>
            </el-col>
             <el-col :span="6" style ="text-align:center">
                      <p class="contentTitle">{{notlendednum}}</p>
                      <div class="homesnum">{{homesnotlended}}</div>
            </el-col>
        </el-row>
        <div style="width:90%;margin:0 auto;">
       
            <el-table
    target="#mylist"
    :data="tableData"
    
    :show-header="true"
    border
    style="width: 100%;height:670px;border-top:1px solid #ccc;">
    <el-table-column 
      prop="num"
      label="序号" align="center" width="250">
    </el-table-column>
    <el-table-column
       prop="name"
      label="楼宇名称" align="center">
    </el-table-column>
    <el-table-column
       prop="number"
      label="套数" align="center">
    </el-table-column>
    <el-table-column
       prop="rented"
      label="已租房源" align="center" width="280">
    </el-table-column>
    <el-table-column
       prop="notrent"
      label="空直房源" align="center" width="180">
    </el-table-column>
  <el-table-column
       prop="rate"
      label="面积空置率" align="center" width="180">
    </el-table-column>
    <el-table-column
       prop="operation"
      label="操作"
      width="100" align="center">
      <template slot-scope="scope">
        <el-button @click="open(scope.row)" type="text" size="small">详情</el-button>

        
        
      </template>
    </el-table-column>
  </el-table>
  <el-row id="fenye">
  <el-col>
<el-pagination
  background
  layout="prev, pager, next"
 :page-count="Math.ceil(middleData.length/10)" @current-change="handleCurrentChange">
</el-pagination>
  </el-col>
  </el-row>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: mapState({
         homeData: state => state.tenment
    }),
      data() {
      return {
        activeIndex: 'all',
        tableData:[],
        middleData:[],
        cityname:'全部',
        homesnum:'31个',
        cityacreage:'总面积（221套）',
        homesacreage:'13665㎡',
        lendednum:'已租房源（8套）',
        homeslended:'225㎡',
        notlendednum:'空置房源（213套)',
        homesnotlended:'13443㎡'

      };
    },
    methods: {
        // 选项卡
      handleSelect(key, keyPath) {
        switch (key) {
            case '北京':this.middleData=this.homeData.filter(item=>{
                return item.adds=='北京';
            });this.handleCurrentChange(1);this.datachange('北京','10个','北京总面积（51套）','3665㎡','已租房源（2套）','100㎡','空置房源（49套)','3265㎡');break;
         case '上海':this.middleData=this.homeData.filter(item=>{
                return item.adds=='上海';
            });this.handleCurrentChange(1);this.datachange('上海','8个','上海总面积（52套）','4000㎡','已租房源（1套）','100㎡','空置房源（51套)','3900㎡');break;
           case '广州':this.middleData=this.homeData.filter(item=>{
               return item.adds=='广州';
            });this.handleCurrentChange(1);this.datachange('广州','6个','广州总面积（60套）','2000㎡','已租房源（2套）','150㎡','空置房源（58套)','2850㎡');break;
              case '深圳':this.middleData=this.homeData.filter(item=>{
                return item.adds=='深圳';
            });this.handleCurrentChange(1);this.datachange('广州','7个','广州总面积（60套）','4000㎡','已租房源（3套）','150㎡','空置房源（57套)','3850㎡');break;
            case 'all':this.middleData=this.homeData;this.handleCurrentChange(1);this.datachange('全部','31个','总面积（221套）','13665㎡','已租房源（8套）','225㎡','空置房源（213套)','13443㎡');break;
               
        }
      },
       handleCurrentChange(val) {
        this.start=(`${val}`-1)*10;
        this.end=(`${val}`+1)*10;
        this.tableData=this.middleData.slice(this.start,this.end);
      },
      datachange(cityname,homesnum,cityacreage,homesacreage,lendednum,homeslended,notlendednum,homesnotlended){
        this.cityname = cityname;
        this.homesacreage=homesacreage;
        this.cityacreage=cityacreage;
        this.homesacreage=homesacreage;
        this.lendednum=lendednum;
        this.homeslended=homeslended;
        this.notlendednum=notlendednum;
        this.homesnotlended = homesnotlended;
      }
    },
     created () {
       this.middleData=this.homeData;
        this.tableData=this.homeData.slice(this.start,this.end);
    },
    
}
</script>

<style scoped>
.el-menu--horizontal .el-menu-item{
    font-size:20px;
    line-height: 72px;
    margin-left:80px;
}
.pagetitle{
    font-size:18px;
    /* margin-bottom:30px; */
    line-height:50px;
}

  .list_title{
        font-size:18px;
        line-height:78px;
        font-weight: 800;

    }
    #table_title{
        font-size:16px;
        line-height:70px;
        text-align: center
    }
    #fenye{
        width:100%;
        background:#fff;
        text-align:center;
        line-height: 34px;
        padding-top:40px;
    }
.el-table__header-wrapper .el-table__header{
  border:1px solid #999;
}
.homesnum{
  width:160px;line-height:52px;background:#f8fbfe;color:#3384d5;font-size:26px;margin:0 auto;text-align:center;margin-bottom:30px;;
}
.contentTitle{
  font-size:20px;
  margin-top:20px;
  color:#999;
}
</style>
