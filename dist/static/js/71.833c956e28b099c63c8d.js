webpackJsonp([71],{VPXl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("UIuv"),o=a.n(l),n={bannerposition:"",bannertype:"",price:"",lasttime:"",num:""},r={data:function(){return{title:"添加广告",formData:n}},methods:{resetForm:function(){this.formData={bannerposition:"",bannertype:"",price:"",lasttime:"",num:""}},onSubmit:function(){var t=this;new o.a(function(e,a){""!=t.formData.bannerposition&&""!=t.formData.bannertype&&""!=t.formData.price&&""!=t.formData.lasttime&&""!=t.formData.num&&(t.$store.commit("addBanner",{formData:t.formData,num:2}),e()),a()}).then(function(){alert("提交成功")}).catch(function(){alert("请正确输入")}),this.resetForm()}},created:function(){this.resetForm()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{background:"#fff",height:"980px","margin-top":"30px"}},[a("el-col",{staticStyle:{"padding-top":"20px","line-height":"30px"},attrs:{span:23,offset:1}},[t._v("\n          "+t._s(t.title)+"\n      ")]),t._v(" "),a("el-row",{staticStyle:{width:"98%",margin:"0 auto","margin-top":"100px"}},[a("el-form",{attrs:{inline:!0,model:t.formData,"label-width":"80px"}},[a("el-form-item",{staticStyle:{width:"280px"},attrs:{label:"广告名称"}},[a("el-input",{staticStyle:{width:"180px"},model:{value:t.formData.num,callback:function(e){t.$set(t.formData,"num",e)},expression:"formData.num"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"320px"},attrs:{label:"广告位地点","label-width":"120px"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择地点"},model:{value:t.formData.bannerposition,callback:function(e){t.$set(t.formData,"bannerposition",e)},expression:"formData.bannerposition"}},[a("el-option",{attrs:{label:"优盛大厦",value:"优盛大厦"}}),t._v(" "),a("el-option",{attrs:{label:"世纪科贸大厦",value:"世纪科贸大厦"}}),t._v(" "),a("el-option",{attrs:{label:"财智国际大厦",value:"财智国际大厦"}}),t._v(" "),a("el-option",{attrs:{label:"创新大厦",value:"创新大厦"}}),t._v(" "),a("el-option",{attrs:{label:"搜狐媒体大厦",value:"搜狐媒体大厦"}}),t._v(" "),a("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"280px"},attrs:{label:"版位类型"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择类型"},model:{value:t.formData.bannertype,callback:function(e){t.$set(t.formData,"bannertype",e)},expression:"formData.bannertype"}},[a("el-option",{attrs:{label:"轮播图",value:"轮播图"}}),t._v(" "),a("el-option",{attrs:{label:"VR视频广告",value:"VR视频广告"}}),t._v(" "),a("el-option",{attrs:{label:"文字广告",value:"文字广告"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"320px"},attrs:{label:"广告价格"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入价格",clearable:!0},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",t._n(e))},expression:"formData.price"}},[a("template",{slot:"append"},[t._v("元／天")])],2)],1),t._v(" "),a("el-form-item",{staticStyle:{},attrs:{label:"投放时间","label-width":"120px;"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择期限"},model:{value:t.formData.lasttime,callback:function(e){t.$set(t.formData,"lasttime",e)},expression:"formData.lasttime"}},[a("el-option",{attrs:{label:"1天",value:"1天"}}),t._v(" "),a("el-option",{attrs:{label:"7天",value:"7天"}}),t._v(" "),a("el-option",{attrs:{label:"14天",value:"14天"}}),t._v(" "),a("el-option",{attrs:{label:"21天",value:"21天"}}),t._v(" "),a("el-option",{attrs:{label:"30天",value:"30天"}})],1)],1),t._v(" "),a("el-row",[a("el-form-item",{staticStyle:{width:"100%","text-align":"center","margin-top":"20px"}},[a("el-tooltip",{attrs:{effect:"dark",content:"请务必保证字段完整，不然可能无法提交",placement:"bottom"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit()}}},[t._v("提交")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},s=a("XAIM")(r,i,!1,null,null,null);e.default=s.exports}});