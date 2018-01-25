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
      label="网点名称" align="center">
    </el-table-column>
    <el-table-column
       prop="place"
      label="地点" align="center">
    </el-table-column>
    <el-table-column
       prop="area"
      label="网点面积" align="center" width="280">
    </el-table-column>
    <el-table-column
       prop="starttime"
      label="起始时间" align="center" width="180">
    </el-table-column>
  <el-table-column
       prop="staic"
      label="状态" align="center" width="180">
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
         homeData: state => state.dot
    }),
      data() {
      return {
        activeIndex: 'all',
        tableData:[],
        middleData:[],
        cityname:'全部',
        homesnum:'32个',
        cityacreage:'总网点数（271个）',
        homesacreage:'13665㎡',
        lendednum:'在线网点（165个）',
        homeslended:'225㎡',
        notlendednum:'停运网点（6个)',
        homesnotlended:'13443㎡'

      };
    },
    methods: {
        // 选项卡
      handleSelect(key, keyPath) {
        switch (key) {
            case '北京':this.middleData=this.homeData.filter(item=>{
                return item.adds=='北京';
            });this.handleCurrentChange(1);this.datachange('北京','8个','北京网点数（51个）','3665㎡','在线网点（65个）','100㎡','停运网点（3个）','3265㎡');break;
         case '上海':this.middleData=this.homeData.filter(item=>{
                return item.adds=='上海';
            });this.handleCurrentChange(1);this.datachange('上海','8个','上海网点数（52个）','4000㎡','在线网点（35个）','100㎡','停运网点（2个）','3900㎡');break;
           case '广州':this.middleData=this.homeData.filter(item=>{
               return item.adds=='广州';
            });this.handleCurrentChange(1);this.datachange('广州','6个','广州网点数（60个）','2000㎡','在线网点（25个）','150㎡','停运网点（1个）','2850㎡');break;
              case '深圳':this.middleData=this.homeData.filter(item=>{
                return item.adds=='深圳';
            });this.handleCurrentChange(1);this.datachange('广州','8个','广州网点数（60个）','4000㎡','在线网点（50个）','150㎡','停运网点（0个）','3850㎡');break;
            case 'all':this.middleData=this.homeData;this.handleCurrentChange(1);this.datachange('全部','32个','总网点数（271个）','13665㎡','在线网点（165个）','225㎡','停运网点（6个）)','13443㎡');break;
               
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
