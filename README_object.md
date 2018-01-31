# 九大模块-产业大数据统计中心
## 项目技术：
- vue-cli
- webpack
- vue-axios
- json
- vue-lazy
- vuex
- vue-router
- elmentul
- es6
- echart
- vue-echart3
- git
## 项目核心：
- router
- vuex
## 想修改项目在服务器上的存放目录：
- /config/index.js 找到build下面的 assetsPublicPath 将后面的字符串直接修改为项目目录位于网站根目录的相对目录。
- 其余配置千万不要动！！！！否则无法恢复，如果需要修改其余配置，请先确保备份
## 如果想修改elmentui的内置css样式。
- 可以前往/node_modules/elment-ui/lib/theme-chalk
- 想修改框架结构可以前往 /node_modules/elment-ui/packages/对应组件名/src／
- 不是万不得已不建议修改因为这是个全局的，一旦修改意味着整个都会被修改
## 项目修改流程
- 首先找到要修改的页面的url
- 到/src/router/index.js 中寻找路径（需要一级一级的找 例子：http://localhost:7000/#/hotel/homeShow 则他的父级路径就是hotel 找到/hotel之后，在children中寻找homeShow）,找到具体路径之后，请看她的component
- 找到component之后 回到index.js 顶部 引入compound地方（const 模块名字（也就是刚才的component）import 文件路径）
- 找到文件路径之后（大部分用@开头），不用管@ 直接进入到／src／components/ 这个文件夹，然后根据@／components/后面的路径进行找到对应文件
- 打开对应vue文件之后会看到三个大的模块  template/script/style  不管哪个vue文件基本都是这个架构，想修改dom则在template 想修改js在scirpt下面 style同理
## 项目修改注意事项
- 尽量不要修改js，如果不是熟悉vue操作或者检查不仔细的情况下，可能修改一个地方会造成项目多处改变（已经有大部分表实现了联动）；
- 修改dom时候 需要注意在标签中的{{}}这个符号和以：开头的标签属性以及以v-开头的标签属性  这个符号里面的内容证明是绑定数据，可以从script 中的data（绑定数据），props（父级传入的参数），computed（计算属性）里面去查找对应的变量名字（如果都没有请继续往下看）
- 需要注意script里面的 import {} from "vuex" 这是从vuex导入一个包 尤其要注意 map...开头的这是从vuex的store仓库导入一个变量/同步方法/异步方法/过滤属性/ 如果想修改这里的数据 需要去找/src/store/index.js （千万要注意：里面有每个module （模块），每个module下面有可能存在重名变量，千万要查找好。千万不要使用查找功能，防止查找错，进而修改错）
- 碰到commit 这个是调用vuex中的 mutation 方法，碰到dispatch是调用vuex的action方法。按照上面方法去查找对应方法就行
## router（路由）相关
- 每个router我都已经加好了对应的网址和相应的菜单栏目 作为备注 router文件的位置:"/src/router/index.js"
- router切记不要改，如果需要在进入离开页面时候做一些操作，可以去vue文件或者mainjs文件里面 我都做好 全局和局部的路由前置后置更新的守卫 每个守卫例子有一个。照着更改即可。
- 如果不喜欢hash模式的url路由可以改为history模式的路由 更改方法：VueRouter下面加入 mode: 'history',
## 本项目的备份地址：
- https://github.com/JinZhenZon/industrialData
- 如果不小心删除或者更改出现不可修补的错误 之后。可以在命令行使用 git clone https://github.com/JinZhenZon/industrialData 即可下载下来本项目
- 或者在 cd 到本项目根目录(industrialData) ，使用 git pull命令；
## 其余九大模块中的几个项目也是这么修改，就不再赘述，还有一个php的项目已经单独写好如何修改，可以自行查看
## 如果有哪些不明白可以联系我qq：421217189
