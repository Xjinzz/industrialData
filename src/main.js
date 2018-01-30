// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/index_menu'
import router from './router/index'
// lazyload插件
import VueLazyload from "vue-lazyload";
//引入饿了么组件
import ElementUI from 'element-ui'
// vuex
import store from './store/store'
// elmentui
import 'element-ui/lib/theme-chalk/index.css'
// resetcss
import '../static/css/reset.css'
// loading from elment-ui
import { Loading } from 'element-ui';

Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(ElementUI)
    // vue图片懒加载
Vue.use(VueLazyload, {
    listtenEvents: ['scroll'],
    attemt: 2,
    // loading and error path
    // error:'',
    // loading:''
    lazyComponent: true,
    // 预装
    preLoad: 1.5,
    //尝试数
    attempt: 5,
    throttleWait: 300,
})

Vue.config.devtools = true
var vm = new Vue({
        el: '#app',
        router,
        store,
        template: '<App></App>',
        components: { App }
    })
    // vm.$Lazyload.$on('loaded', function ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error }, formCache){
    //   console.log(bindType, naturalHeight, $parent, loading, el, error, src, formCache)
    //               // undefined 图像高度          父亲元素 加载时图像 节点 错误时图片 路径
    //             })


//全局导航输出地址 测试route 加载loading
router.beforeEach((to, from, next) => {
    console.log("进入地址:", to.fullPath);
    var x = 0;
    var loadingInstance = Loading.service({
        fullscreen: true
    });
    // load动画 暂时设置为：100/60/2 s 如果取自数据库可以设置数据x为ture 当有数据时设置x为false；
    var timer = window.requestAnimationFrame(function load() {
        if (x < 100) {
            x = x + 2;
            console.log(x);
            timer = window.requestAnimationFrame(load);
        } else {
            window.cancelAnimationFrame(timer);
            loadingInstance.close();
        }



    });
    next();
})
router.afterEach((to, from) => {
    console.log('离开地址：', to.fullPath);
})