webpackJsonp([36],{b6f4:function(t,e,n){var a=n("yVCT");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("6imX")("06f3170e",a,!0)},wdMO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("34v0"),i=n.n(a),l=n("EcfS"),o=n("E7Dk"),r={data:function(){return{tableData:[],start:0,end:12}},computed:i()({},Object(l.d)({homeData:function(t){return t.marginmgt}})),created:function(){this.tableData=this.homeData.slice(this.start,this.end)},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},handleCurrentChange:function(t){this.start=12*(""+t-1),this.end=12*(""+t+1),this.tableData=this.homeData.slice(this.start,this.end)}},components:{tableHeader:o.a}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{background:"#eee",position:"relative"}},[n("tableHeader",{staticStyle:{"margin-top":"20px"}},[n("div",{attrs:{slot:"pagetitle"},slot:"pagetitle"},[t._v("保证金管理")])]),t._v(" "),n("div",{staticStyle:{width:"98%",margin:"0 auto"}},[n("el-table",{staticStyle:{width:"100%",height:"800px","margin-top":"0px"},attrs:{target:"#mylist",data:t.tableData,stripe:"","show-header":!0,border:""}},[n("el-table-column",{attrs:{prop:"num",label:"合同编号",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"项目名称",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"worknum",label:"工位编号",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"money",label:"收租金额",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"static",label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-col",{staticStyle:{color:"#999","font-size":"18px","line-height":"38px"}},[t._v("已收租")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"area",label:"面积",align:"center"}})],1)],1),t._v(" "),n("el-row",{attrs:{id:"fenye"}},[n("el-col",[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":Math.ceil(t.homeData.length/12)},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)])},staticRenderFns:[]},s=n("XAIM")(r,c,!1,function(t){n("b6f4")},"data-v-4fb438c4",null);e.default=s.exports},yVCT:function(t,e,n){(t.exports=n("bKW+")(!1)).push([t.i,"\n.laytexttitle[data-v-4fb438c4]{\n    font-size:18px;line-height:80px;color:#999;\n}\n.laytexttitle span[data-v-4fb438c4]{\n    color:#666;\n}\n.addssubtitle[data-v-4fb438c4]{\n    font-size:24px;\n    line-height:50px;\n    color:#333;\n}\n.addstitle[data-v-4fb438c4]{\n    font-size:18px;\n    line-height:30px;\n    color:#999;\n}\n.subtitle[data-v-4fb438c4]{\n    border-bottom:1px solid #ccc;\n}\n.fujian[data-v-4fb438c4]{\n    color:#4986f7;\n    font-size:18px;\n    line-height: 70px;\n}\n.proname[data-v-4fb438c4]{\n    font-size:24px;\n    line-height: 70px;\n}\n.boxtitle[data-v-4fb438c4]{\n    font-size:18px;line-height:80px;\n}\n.el-menu--horizontal .el-menu-item[data-v-4fb438c4]{\n    font-size:20px;\n    line-height: 72px;\n    margin-left:80px;\n}\n.pagetitle[data-v-4fb438c4]{\n    font-size:18px;\n    line-height:50px;\n}\n.list_title[data-v-4fb438c4]{\n        font-size:18px;\n        line-height:78px;\n        font-weight: 800;\n}\n#table_title[data-v-4fb438c4]{\n        font-size:16px;\n        line-height:70px;\n        text-align: center\n}\n#fenye[data-v-4fb438c4]{\n        width:100%;\n        background:#fff;\n        text-align:center;\n        line-height: 34px;\n        padding-top:40px;\n}\n\n",""])}});