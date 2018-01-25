import Vue from 'vue'
import Router from 'vue-router'


// 酒店相关页面

const hotel = () => import('../components/hotel/hotelmenu');
const hotelindex = () => import('../components/hotel/indexContent')
const homeShow = () => import('../components/hotel/home/homeShow')
const addHome = () => import('../components/hotel/home/addHome')
const userlive = () => import('../components/hotel/home/userlive')
const Reservelive = () => import('../components/hotel/home/Reservelive')
const liveList = () => import('../components/hotel/user/live')
const lenve = () => import('../components/hotel/user/lenve')
const viper = () => import('../components/hotel/vip/viper')
const addvip = () => import('../components/hotel/vip/addvip')
const fill = () => import('../components/hotel/finace/bill')
const tongji = () => import('@/components/hotel/finace/tongji')
const adminList = () => import('@/components/hotel/Administrators/list.vue')
const addAdmin = () => import('@/components/hotel/Administrators/addAdmin')
const purChange = () => import('@/components/hotel/Administrators/purChange')

//住宅相关页面
const home = () => import('@/components/home/homemenu')
const homeindex = () => import('@/components/home/index')
const personAdmin = () => import('@/components/home/liveAdmin/personAdmin')
const addliveperson = () => import('@/components/home/liveAdmin/addliveperson')
const personouser = () => import('@/components/home/ouser/personouser')
const caradmin = () => import('@/components/home/ouser/caradmin')
const real = () => import('@/components/home/videolist/Clue.vue')
const video_list = () => import('@/components/home/videolist/video_list.vue')
const video = () => import('@/components/home/videolist/video')
const videoed = () => import('@/components/home/videolist/videoed')
const video_list2 = () => import('@/components/home/videolist/video_list2')
const video_list3 = () => import('@/components/home/videolist/video_list3')
const video_list4 = () => import('@/components/home/videolist/video_list4')
const video_list5 = () => import('@/components/home/videolist/video_list5')
const video_list6 = () => import('@/components/home/videolist/video_list6')
const visteror = () => import('@/components/home/visteror/visteror')
const addCar = () => import('@/components/home/ouser/addCar')
const addPersonouser = () => import('@/components/home/ouser/addPersonouser')
const livecar = () => import('@/components/home/liveadmin/livecar');
const addlivecar = () => import('@/components/home/liveadmin/livecaradmin');

//商业街相关页面
const shopstreet_index = () => import('@/components/shopstreet/shopstreet_menu')
const shopstreethome = () => import('@/components/shopstreet/shopstreetHome')
const showstreet = () => import('@/components/shopstreet/showstreet')
const streetlist = () => import('@/components/shopstreet/streetlist')
const addshopstreet = () => import('@/components/shopstreet/addshopstreet')

const bannerlist = () => import('@/components/shopstreet/bannerlist')
const dataList = () => import('@/components/shopstreet/dataList')
const revenenue = () => import('@/components/shopstreet/revenenue')
const shop = () => import('@/components/shopstreet/shop')
const streetAdminList = () => import('@/components/shopstreet/Administrators/list')
const streetAddAdmin = () => import('@/components/shopstreet/Administrators/addAdmin')
const streetpurChange = () => import('@/components/shopstreet/Administrators/purChange')

const addBannerPosition = () => import('@/components/shopstreet/addBannerPosition')
const addBanner = () => import('@/components/shopstreet/addBanner')

//产业园相关页面
const Industrial = () => import('@/components/industrial/menu');
const Industrial_index = () => import('@/components/industrial/index')
const tenement = () => import('@/components/industrial/tenement')
const dot = () => import('@/components/industrial/dot')
const customer = () => import('@/components/industrial/customer')
const merchant = () => import('@/components/industrial/merchant')
const contractadmin = () => import('@/components/industrial/contractadmin')
const contractrev = () => import('@/components/industrial/contractrev')
const tobesubmit = () => import('@/components/industrial/tobesubmit')
const rentmgt = () => import('@/components/industrial/rentmgt')
const marginmgt = () => import('@/components/industrial/marginmgt')
const retirestt = () => import('@/components/industrial/retirestt')
const datachart = () => import('@/components/industrial/datachart')

//ppp项目相关页面
const pppMenu = () => import('@/components/pppproject/pppMenu')
const settledEnterprise = () => import ('@/components/pppproject/settledEnterprise')
const projectDetail = () => import('@/components/pppproject/projectDetail')
const projectInvest = () => import('@/components/pppproject/investment')
const projectinvestment = () => import('@/components/pppproject/projectinvestment')
const bulletinText = () => import('@/components/pppproject/bulletinText')
const profitList =()=>import('@/components/pppproject/profitlist')
const bulletin = () => import('@/components/pppproject/bulletin')
const consumptionlist = () => import('@/components/pppproject/consumptionlist')
const pppindex = ()=>import("@/components/pppproject/pppindex");
//城镇相关页面
const townMenu = () => import("@/components/town/town_menu")
const townIndex = () => import("@/components/town/town_index")
const towneast = ()=> import('@/components/town/town_east')
const towncenter = () => import('@/components/town/town_center')
const townnosth = () => import('@/components/town/town_nosth')
const townpersonAdmin = () => import('@/components/town/personAdmin');
const townliveAdmin  = () => import('@/components/town/liveAdmin');
const towncasebar = () => import('@/components/town/casebar');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hotel',
      component: hotel,
      children: [
        {
          // http://localhost:7000/#/hotel/index 酒店 -》首页
          path: 'index',
          component: hotelindex
        },
        {
          // http://localhost:7000/#/hotel/homeShow 酒店-》房间状态-》房间展示
          path: 'homeShow',
          component: homeShow,
        },
        {
          // http://localhost:7000/#/hotel/addHome 酒店-》房间状态-》添加房间
          path: 'addHome',
          component: addHome,

        },
        {
          // http://localhost:7000/#/hotel/userlive 酒店-》房间状态-》顾客入住
          path: 'userlive',
          component: userlive,

        },
        {
          // http://localhost:7000/#/hotel/userlive 酒店-》房间状态-》预定房间
          path: 'Reservelive',
          component: Reservelive,
        },

        {
          // http://localhost:7000/#/hotel/liveList 酒店-》顾客登记-》入住信息
          path: 'liveList',
          component: liveList,
        },
        {
          // http://localhost:7000/#/hotel/lenve 酒店-》顾客登记-》退房信息
          path: 'lenve',
          component: lenve,
        }, {
           // http://localhost:7000/#/hotel/viper 酒店-》顾客登记-》会员列表
          path: 'viper',
          component: viper,
        }, {
          // http://localhost:7000/#/hotel/addvip 酒店-》顾客登记-》添加会员
          path: 'addvip',
          component: addvip,
        }, {
          // http://localhost:7000/#/hotel/fill 酒店-》财务管理-》流水账单
          path: 'fill',
          component: fill,

        }, {
          // http://localhost:7000/#/hotel/tongji 酒店-》财务管理-》账单统计
          path: 'tongji',
          component: tongji
        },
        {
           // http://localhost:7000/#/hotel/adminList 酒店-》权限管理-》管理员列表
          path: 'adminList',
          component: adminList
        }, {
           // http://localhost:7000/#/hotel/addAdmin 酒店-》权限管理-》添加管理员
          path: 'addAdmin',
          component: addAdmin
        }, {
           // http://localhost:7000/#/hotel/purChange 酒店-》权限管理-》权限管理
          path: 'purChange',
          component: purChange
        }


      ]
    }, {
      path: '/home',
      component: home,
      children: [
        {
          path:'addlivecar',
          component: addlivecar
        },
        {
          // http://localhost:7000/#/live/livecar 住宅->住户-》车辆管理
          path:'livecar',
          component: livecar,
        },
        {
          // http://localhost:7000/#/home/index 住宅-》首页
          path: 'index',
          component: homeindex
        }, {
          // http://localhost:7000/#/home/personAdmin 住宅-》住户管理-》人员管理
          path: 'personAdmin',
          component: personAdmin
        }, {
          // http://localhost:7000/#/home/personAdmin 住宅-》住户管理-》人员管理
          path: 'addliveperson',
          component: addliveperson
        }
        , {
          // http://localhost:7000/#/home/personouser 住宅-》物业人员管理-》人员管理
          path: 'personouser',
          component: personouser
        }, {
          // http://localhost:7000/#/home/caradmin 住宅-》物业人员管理-》车辆管理
          path: 'caradmin',
          component: caradmin

        }, {
          path:'addCar',
          component:addCar,
        },{
          path:"addPersonouser",
          component: addPersonouser,
        },{
          // http://localhost:7000/#/home/real 住宅-》视频监控-》实时监控
          path: 'real',
          component: real,
          children: [
            {
          // http://localhost:7000/#/home/real 住宅-》视频监控-》东西南中心（动态路由，未区分） 此处要修改
              path: '/home/real/:position',
              component: video_list

            }
          ]
        }, {
         
          path: 'video',
          component: video,
        }, {
           // http://localhost:7000/#/videoed/ 住宅-》视频监控-》录像回放
          path: 'videoed',
          component: videoed,
          children: [
            {
           // http://localhost:7000/#/videoed/all 住宅-》视频监控-》录像回放-》全部
              path: 'all',
              component: video_list2

            }, {
              path: 'east',
              component: video_list3

            }, {
              path: 'west',
              component: video_list4

            }
            , {
              path: 'noth',
              component: video_list5

            }, {
              path: 'center',
              component: video_list6

            }
          ]
        }, {
           // http://localhost:7000/#/videoed/all 住宅-》方可管理-》访客登记
          path: 'visteror',
          component: visteror
        }


      ]
    }, {
      path: '/shopstreet',
      component: shopstreet_index,
      children: [
        {
          // http://localhost:7000/#/shopstreet/index 商业街-》首页
          path: 'index',
          component: shopstreethome,
        }, {
          // http://localhost:7000/#/shopstreet/showstreet 商业街-》招商管理-》招商展示
          path: 'showstreet',
          component: showstreet,
        }, {
          // http://localhost:7000/#/shopstreet/streetlist 商业街-》商铺管理-》商铺列表
          path: 'streetlist',
          component: streetlist,
        }, {
          // http://localhost:7000/#/shopstreet/bannerlist 商业街-》广告位管理-》广告位管理
          path: 'bannerlist',
          component: bannerlist,
        }, {
          // http://localhost:7000/#/shopstreet/dataList 商业街-》数据中心-》租客数据统计
          path: 'dataList',
          component: dataList,
        }, {
          // http://localhost:7000/#/shopstreet/revenenue 商业街-》数据中心-》费用收支明细
          path: 'revenenue',
          component: revenenue,
        }
        , {
          // http://localhost:7000/#/shopstreet/shop 商业街-》数据中心-》商铺出租率

          path: 'shop',
          component: shop,
        }, {
          // http://localhost:7000/#/shopstreet/adminList 商业街-》权限管理-》管理员列表
          path: 'adminList',
          component: streetAdminList,
        }, {
          // http://localhost:7000/#/shopstreet/addBannerPosition 商业街-》广告位管理-》添加广告位
          path: "addBannerPosition",
          component: addBannerPosition,
        },{
          // http://localhost:7000/#/shopstreet/addBanner 商业街-》广告位管理-》添加广告
          path:"addBanner",
          component:addBanner,
        },{
          // http://localhost:7000/#/shopstreet/addBanner 商业街-》权限管理-》添加管理员
          path:'streetAddAdmin',
          component: streetAddAdmin
        },{
          // http://localhost:7000/#/shopstreet/streetpurChange 商业街-》权限管理-》修改权限
          path:'streetpurChange',
          component: streetpurChange
        },{
          // http://localhost:7000/#/shopstreet/addshopstreet 商业街-》招商管理-》添加商铺
          path:"addshopstreet",
          component:addshopstreet,
        }
      ]
    }, {
      path: '/Industrial',
      component: Industrial,
      children: [
        {
          // http://localhost:7000/#/Industrial/index 产业园-》首页
          path: 'index',
          component: Industrial_index,

        }, {
          // http://localhost:7000/#/Industrial/tenement 产业园-》资产管理-》楼宇管理
          path: 'tenement',
          component: tenement,
        }
        , {
          // http://localhost:7000/#/Industrial/dot 产业园-》资产管理-》网点管理
          path: 'dot',
          component: dot,
        }, {
          // http://localhost:7000/#/Industrial/dot 产业园-》招商管理-》客户管理
          path: 'customer',
          component: customer,
        }, {
          // http://localhost:7000/#/Industrial/dot 产业园-》招商管理-》商户管理
          path: 'merchant',
          component: merchant,
        }, {
          // http://localhost:7000/#/Industrial/dot 产业园-》合同管理-》合同管理
          path: 'contractadmin',
          component: contractadmin,
        }
        , {
          // http://localhost:7000/#/Industrial/contractrev 产业园-》合同管理-》待审核
          path: 'contractrev',
          component: contractrev,
        }, {
          // http://localhost:7000/#/Industrial/tobesubmit 产业园-》合同管理-》待提交
          path: 'tobesubmit',
          component: tobesubmit,
        }, {
          // http://localhost:7000/#/Industrial/rentmgt 产业园-》财务管理-》保证金管理
          path: 'rentmgt',
          component: rentmgt,

        }, {
          // http://localhost:7000/#/Industrial/marginmgt 产业园-》财务管理-》收租管理

          path: 'marginmgt',
          component: marginmgt,

        }, {
          // http://localhost:7000/#/Industrial/marginmgt 产业园-》财务管理-》退款房管理
          path: 'retirestt',
          component: retirestt,

        }, {
          // http://localhost:7000/#/Industrial/datachart 产业园-》数据分析-》数据分析
          path: 'datachart',
          component: datachart,

        }
      ]


    },
    {
      path: "/ppp",
      component: pppMenu,
      children:[
        {
          path: "settledEnterprise",
          component: settledEnterprise,
        },{
          path:'projectDetail',
          component: projectDetail,
        },{
          path:'projectinvestment',
          component: projectinvestment,
        }, {
          path: 'projectList',
          component: projectinvestment,
        }, {

          path: 'projectInvest',
          component: projectInvest,
        },{
          path:"bulletinText",
          component: bulletinText
        },{
          path:"profitlist",
          component:profitList
        },{
          path:"bulletin",
          component: bulletin
        },{
          path:"consumptionlist",
          component: consumptionlist,
        },{
          path:"projectindex",
          component:pppindex,
        }
      ]
    },
    {
      path:'/townMenu',
      component: townMenu,
      children:[
        {
          path:"index",
          component:townIndex,
          children:[
            {
              path:"center",
              component: towncenter,
            },
            {
              path: "nosth",
              component: townnosth,
            }, {
              path: "east",
              component: towneast,
            },
          ]
        },{
          path:"personAdmin",
          component:townpersonAdmin,
        },{
          path:"towncasebar",
          component: towncasebar,
        },
        {
          path: "liveAdmin",
          component: townliveAdmin,
        }
      ],
      //局部导航
      beforeEnter: (to, from, next) => {
        // ...
        console.log('进入城镇页面');
        next();
      },
    
    }
  ],
  // 重置页面滚动条
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0, y: 0
      }
    }
  },

})
