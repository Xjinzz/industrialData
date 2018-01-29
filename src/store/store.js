import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        homeData: [{
                homeNum: '0306',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 360,
                grade: '普通标间'

            },
            {
                homeNum: '0307',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 400,
                grade: '豪华单间'

            },
            {
                homeNum: '0308',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 450,
                grade: '普通标间'

            },
            {
                homeNum: '0309',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 500,
                grade: '豪华单间'
            },
            {
                homeNum: '0310',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 300,
                grade: '普通单间'

            },
            {
                homeNum: '0311',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 100,
                grade: '普通单间'

            },
            {
                homeNum: '0312',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 200,
                grade: '普通标间'

            },
            {
                homeNum: '0313',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 150,
                grade: '普通标间'

            },
            {
                homeNum: '0314',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 600,
                grade: '豪华单间'
            },
            {
                homeNum: '0315',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 300,
                grade: '普通标间'

            },
            {
                homeNum: '0316',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 200,
                grade: '豪华单间'
            },
            {
                homeNum: '0317',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 250,
                grade: '豪华单间'
            },
            {
                homeNum: '0318',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 300,
                grade: '普通标间'

            },
            {
                homeNum: '0319',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 360,
                grade: '豪华标间'
            }, {
                homeNum: '0401',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 360,
                grade: '普通标间'

            },
            {
                homeNum: '0402',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 400,
                grade: '豪华标间'
            },
            {
                homeNum: '0403',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 450,
                grade: '豪华单间'
            },
            {
                homeNum: '0404',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 500,
                grade: '豪华单间'
            },
            {
                homeNum: '0405',
                homeState: '空闲',
                homePosition: '靠窗',
                homeType: '客房',
                homePrice: 300,
                grade: '普通标间'
            },




        ],
        hotel: [{
            path: 'static/img/hotel/8.png',
            width: '280',
            height: '280',
            hotelname: '早安酒店北京西云阁店',
            index: 1,
        }, {
            path: 'static/img/hotel/7.png',
            width: '280',
            height: '280',
            hotelname: '时光漫步怀旧主题酒店',
            index: 2,
        }, {
            path: 'static/img/hotel/6.png',
            width: '280',
            height: '280',
            hotelname: '春晖园温泉度假酒店',
            index: 3,
        }, {
            path: 'static/img/hotel/5.png',
            width: '280',
            height: '280',
            hotelname: '北京中国大饭店',
            index: 4,
        }, {
            path: 'static/img/hotel/4.png',
            width: '280',
            height: '280',
            hotelname: '北京王府井希尔顿酒店',
            index: 5,
        }, {
            path: 'static/img/hotel/3.png',
            width: '280',
            height: '280',
            hotelname: '北京海润艾丽华酒店及服务公寓',
            index: 6,
        }, {
            path: 'static/img/hotel/2.png',
            width: '280',
            height: '280',
            hotelname: '古北水镇大酒店',
            index: 7,
        }, {
            path: 'static/img/hotel/1.png',
            width: '280',
            height: '280',
            hotelname: '北京JW万豪酒店',
            index: 8,
        }, ],
        pagename: 'Q＋早安酒店北京西云阁店>入住信息',
        pagename2: 'Q＋早安酒店北京西云阁店>退房信息',
        pagename3: 'Q＋早安酒店北京西云阁店>会员信息',
        pagename4: 'Q＋早安酒店北京西云阁店>流水账单',
        pagename5: 'Q＋早安酒店北京西云阁店>账单统计',
        pagename6: 'Q＋早安酒店北京西云阁店>权限管理',
        pagename7: '视频巡更',
        pagename8: '招商展示',
        pagename9: '商铺管理',
        pagename10: '广告位管理',
        pagename11: '租客数据统计',


        block: false,
        proname: '欧莱雅',
        addstitle: 'B座',
        addssubtitle: '12层-3室  1203',
        shoptype: '化妆品',
        comptype: '旗舰店',
        comin: '化妆品',
        shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',



        live: [{
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0101',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0102',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0103',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0104',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0105',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0106',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0107',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0108',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0109',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0110',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0201',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0202',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0203',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0204',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0205',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0206',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0207',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0208',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0209',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0210',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0301',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0302',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0303',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0304',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0305',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },

        ],
        lenve: [{
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0101',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0102',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0103',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0104',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0105',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0106',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0107',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0108',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0109',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0110',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0201',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0202',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0203',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0204',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0205',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0206',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0207',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0208',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0209',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },
            {
                name: '王立东',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0210',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李美华',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0301',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '罗本桥',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0302',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '李薇薇',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0303',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '王秀英',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0304',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            }, {
                name: '孙杰',
                peo: '292035********9934',
                tel: '15196929525',
                homeNum: '0305',
                intime: '2017-09-17  08:12:30',
                outtime: '2017-09-19  08:12:30',
                meney: 600,
                shoule: 20,

            },

        ],
        viper: [{
            name: '孙杰',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王立东',
            peo: '184132********7142',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李美华',
            peo: '910281********8121',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '罗本桥',
            peo: '292035********9934',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李薇薇',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王秀英',
            peo: '292035********9934',
            tel: '13785664355',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '孙杰',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王立东',
            peo: '184132********7142',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李美华',
            peo: '910281********8121',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '罗本桥',
            peo: '292035********9934',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李薇薇',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王秀英',
            peo: '292035********9934',
            tel: '13785664355',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '孙杰',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王立东',
            peo: '184132********7142',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李美华',
            peo: '910281********8121',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '罗本桥',
            peo: '292035********9934',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李薇薇',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王秀英',
            peo: '292035********9934',
            tel: '13785664355',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '孙杰',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王立东',
            peo: '184132********7142',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李美华',
            peo: '910281********8121',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '罗本桥',
            peo: '292035********9934',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李薇薇',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王秀英',
            peo: '292035********9934',
            tel: '13785664355',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '孙杰',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王立东',
            peo: '184132********7142',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李美华',
            peo: '910281********8121',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '罗本桥',
            peo: '292035********9934',
            tel: '13761529525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '李薇薇',
            peo: '292035********9934',
            tel: '15196929525',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, {
            name: '王秀英',
            peo: '292035********9934',
            tel: '13785664355',
            viptype: '普通会员',
            intime: '2017-09-17  08:12:30',
            zhe: '9.5折',
            meney: '4582.00',
        }, ],
        bill: [{
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            }, {
                name: '房费',
                func: '支付宝',
                homenum: '0101',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '成功'
            }, {
                name: '预付款',
                func: '现金',
                homenum: '0102',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '支付中'
            }, {
                name: '房费',
                func: '微信',
                homenum: '0103',
                intime: '2017-09-17  08:12:30',
                money: '600.00',
                sescss: '失败'
            },

        ],
        /***
         * 升级：每个管理员新增一个key 后增加的依据时间戳进行生成，防止重复
         *      避免碰到重名、重生日的现象出现，因为没有对接数据库也没有去对比
         *      身份证号等等  所以建议使用时间戳 
         **/
        hotelAdminList: [{
                name: '张杰',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992000",
            }, {
                name: '王立东',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992001",
            },
            {
                name: '李美华',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992002",
            }, {
                name: '罗本桥',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992030",
            }, {
                name: '李薇薇',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992040",
            }, {
                name: '王秀英',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992050",
            }, {
                name: '蒋花江',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992060",
            }, {
                name: '梁文栋',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992070",
            }, {
                name: '王可可',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992080",
            }, {
                name: '李元芳',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992090",
            }, {
                name: '王思美',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992160",
            }, {
                name: '张云',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992260",
            }, {
                name: '钱三多',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992360",
            }, {
                name: '李芸芸',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992460",
            }, {
                name: '魏大力',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992560",
            }, {
                name: '赵吴',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992660",
            }, {
                name: '孙右',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992760",
            }, {
                name: '赵可心',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992860",
            }, {
                name: '周截',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992960",
            }, {
                name: '周明',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991060",
            }, {
                name: '郑本生',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991160",
            }, {
                name: '艾震',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991260",
            }, {
                name: '王君',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751993060",
            }, {
                name: '高雨',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372752992060",
            }, {
                name: '田文',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751492060",
            }, {
                name: '周东',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751982060",
            }, {
                name: '王美丽',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751972060",
            }, {
                name: '蔡龙',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751962060",
            }, {
                name: '赵四',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751952060",
            }, {
                name: '花芸芸',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751942060",
            }, {
                name: '罗三立',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751392060",
            }, {
                name: '李杰伦',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751922060",
            }, {
                name: '王沈阳',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751912060",
            }, {
                name: '蒋小宝',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751902060",
            }, {
                name: '梁轮',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751092060",
            }, {
                name: '王云夕',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1362751992060",
            }
        ],
        shopstreetAdminList: [{
                name: '张杰',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992000",
            }, {
                name: '王立东',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992001",
            },
            {
                name: '李美华',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992002",
            }, {
                name: '罗本桥',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992030",
            }, {
                name: '李薇薇',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992040",
            }, {
                name: '王秀英',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992050",
            }, {
                name: '蒋花江',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992060",
            }, {
                name: '梁文栋',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992070",
            }, {
                name: '王可可',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992080",
            }, {
                name: '李元芳',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992090",
            }, {
                name: '王思美',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992160",
            }, {
                name: '张云',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992260",
            }, {
                name: '钱三多',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992360",
            }, {
                name: '李芸芸',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992460",
            }, {
                name: '魏大力',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992560",
            }, {
                name: '赵吴',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992660",
            }, {
                name: '孙右',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992760",
            }, {
                name: '赵可心',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992860",
            }, {
                name: '周截',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751992960",
            }, {
                name: '周明',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991060",
            }, {
                name: '郑本生',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991160",
            }, {
                name: '艾震',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751991260",
            }, {
                name: '王君',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751993060",
            }, {
                name: '高雨',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372752992060",
            }, {
                name: '田文',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751492060",
            }, {
                name: '周东',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751982060",
            }, {
                name: '王美丽',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751972060",
            }, {
                name: '蔡龙',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  08:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751962060",
            }, {
                name: '赵四',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751952060",
            }, {
                name: '花芸芸',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  10:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751942060",
            }, {
                name: '罗三立',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  09:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751392060",
            }, {
                name: '李杰伦',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  11:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751922060",
            }, {
                name: '王沈阳',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  12:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751912060",
            }, {
                name: '蒋小宝',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  13:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751902060",
            }, {
                name: '梁轮',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1372751092060",
            }, {
                name: '王云夕',
                type: '普通管理员',
                department: '财务部',
                creat: '2017-09-17  14:12:30',
                status: '启用',
                jurone: true,
                jurtwo: true,
                jurthree: true,
                key: "1362751992060",
            }
        ],
        personouser: [{
                name: '孙杰',
                department: '财务部',
                chenghu: '会计',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: ' 王立东',
                department: '人事部',
                chenghu: '人事经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李美华',
                department: '销售部',
                chenghu: '销售经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李薇薇',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '将华江',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '孙杰',
                department: '财务部',
                chenghu: '会计',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: ' 王立东',
                department: '人事部',
                chenghu: '人事经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李美华',
                department: '销售部',
                chenghu: '销售经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李薇薇',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '将华江',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '孙杰',
                department: '财务部',
                chenghu: '会计',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: ' 王立东',
                department: '人事部',
                chenghu: '人事经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李美华',
                department: '销售部',
                chenghu: '销售经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李薇薇',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '将华江',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '孙杰',
                department: '财务部',
                chenghu: '会计',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: ' 王立东',
                department: '人事部',
                chenghu: '人事经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李美华',
                department: '销售部',
                chenghu: '销售经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李薇薇',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '将华江',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '孙杰',
                department: '财务部',
                chenghu: '会计',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: ' 王立东',
                department: '人事部',
                chenghu: '人事经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李美华',
                department: '销售部',
                chenghu: '销售经理',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '李薇薇',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }, {
                name: '将华江',
                department: '运营部',
                chenghu: '运营',
                tel: '18810451900',
                intime: '2017-09-19  08:12:30',
                staic: '在职',

            }

        ],
        caradmin: [{
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '赵桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
        ],
        livecaradmin: [{
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '赵桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            }, {
                carnum: '京BRQ702',
                name: '孙杰',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '王立东',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李美华',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '罗本桥',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
            {
                carnum: '京BRQ702',
                name: '李薇薇',
                innertime: '2017-09-17  08:12:30',
                outertime: '2017-09-17  12:12:30',
                cordtype: '月租卡A',
                menoy: '0',
            },
        ],
        video: [{
                place: '第一视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            }, {
                place: '第二视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第三视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第四视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第五视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '未巡更',

            }, {
                place: '第一视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            }, {
                place: '第二视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第三视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第四视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第五视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '未巡更',

            }, {
                place: '第一视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            }, {
                place: '第二视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第三视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第四视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第五视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '未巡更',

            }, {
                place: '第一视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            }, {
                place: '第二视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第三视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第四视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第五视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '未巡更',

            }, {
                place: '第一视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            }, {
                place: '第二视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第三视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第四视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '已巡更',

            },
            {
                place: '第五视频巡更点',
                placeuser: 'root',
                intime: '2017-09-19  08:12:30',
                staic: '未巡更',

            },
        ],
        visteror: [{
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, {
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, {
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, {
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, {
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, {
            name: '孙杰',
            num: '292035********9934',
            carnum: '京BRQ702',
            tel: '15196929523',
            intime: '2017-09-17  08:12:30',
            litime: '2017-09-19  08:12:30',
        }, {
            name: '王立东',
            num: '184132********7142',
            carnum: '京BRQ703',
            tel: '15196929524',
            intime: '2017-09-17  09:12:30',
            litime: '2017-09-19  09:12:30',
        }, {
            name: '李梅花',
            num: '910281********8121',
            carnum: '京BRQ704',
            tel: '15196929525',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '李薇薇',
            num: '292035********9934',
            carnum: '京BRQ705',
            tel: '15196929526',
            intime: '2017-09-17  10:12:30',
            litime: '2017-09-19  10:12:30',
        }, {
            name: '梁文栋',
            num: '292035********0301',
            carnum: '京BRQ706',
            tel: '15196929526',
            intime: '2017-09-17  11:12:30',
            litime: '2017-09-19  11:12:30',
        }, ],
        shopstreetHome: [{
                path: '../../static/img/shopstreet/4.png',
                width: '284px',
                height: '284px',
                shopstreetHome: '沱江小镇'
            }, {
                path: '../../static/img/shopstreet/3.png',
                width: '284px',
                height: '284px',
                shopstreetHome: '渔芙南',
            }, {
                path: '../../static/img/shopstreet/2.png',
                width: '284px',
                height: '284px',
                shopstreetHome: '站点比萨',
            }, {
                path: '../../static/img/shopstreet/1.png',
                width: '284px',
                height: '284px',
                shopstreetHome: '发条时光高级蛋糕',
            }

        ],
        showstreet: [{
                name: '优盛大厦',
                num: '第二层',
                adds: '优盛大厦A602',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '欧莱雅',
                    addstitle: 'B座',
                    addssubtitle: '12层-3室  1203',
                    shoptype: '化妆品',
                    comptype: '旗舰店',
                    comin: '化妆品',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第三层',
                adds: '优盛大厦A603',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '电影院',
                    addstitle: 'A座',
                    addssubtitle: '12层-3室  603',
                    shoptype: '精神消费',
                    comptype: '旗舰店',
                    comin: '精神消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第四层',
                adds: '优盛大厦A604',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '美食城',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  604',
                    shoptype: '美食',
                    comptype: '连锁店',
                    comin: '美食消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第五层',
                adds: '优盛大厦A605',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '设计公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  605',
                    shoptype: '设计',
                    comptype: '连锁店',
                    comin: '设计',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第二层',
                adds: '优盛大厦A602',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '欧莱雅',
                    addstitle: 'B座',
                    addssubtitle: '12层-3室  1203',
                    shoptype: '化妆品',
                    comptype: '旗舰店',
                    comin: '化妆品',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第三层',
                adds: '优盛大厦A603',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '电影院',
                    addstitle: 'A座',
                    addssubtitle: '12层-3室  603',
                    shoptype: '精神消费',
                    comptype: '旗舰店',
                    comin: '精神消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第四层',
                adds: '优盛大厦A604',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '美食城',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  604',
                    shoptype: '美食',
                    comptype: '连锁店',
                    comin: '美食消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第五层',
                adds: '优盛大厦A605',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '设计公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  605',
                    shoptype: '设计',
                    comptype: '连锁店',
                    comin: '设计',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第二层',
                adds: '优盛大厦A602',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '欧莱雅',
                    addstitle: 'B座',
                    addssubtitle: '12层-3室  1203',
                    shoptype: '化妆品',
                    comptype: '旗舰店',
                    comin: '化妆品',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第三层',
                adds: '优盛大厦A603',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '电影院',
                    addstitle: 'A座',
                    addssubtitle: '12层-3室  603',
                    shoptype: '精神消费',
                    comptype: '旗舰店',
                    comin: '精神消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第四层',
                adds: '优盛大厦A604',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '美食城',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  604',
                    shoptype: '美食',
                    comptype: '连锁店',
                    comin: '美食消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第五层',
                adds: '优盛大厦A605',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '设计公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  605',
                    shoptype: '设计',
                    comptype: '连锁店',
                    comin: '设计',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第二层',
                adds: '优盛大厦A602',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '欧莱雅',
                    addstitle: 'B座',
                    addssubtitle: '12层-3室  1203',
                    shoptype: '化妆品',
                    comptype: '旗舰店',
                    comin: '化妆品',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第三层',
                adds: '优盛大厦A603',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '电影院',
                    addstitle: 'A座',
                    addssubtitle: '12层-3室  603',
                    shoptype: '精神消费',
                    comptype: '旗舰店',
                    comin: '精神消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第四层',
                adds: '优盛大厦A604',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '美食城',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  604',
                    shoptype: '美食',
                    comptype: '连锁店',
                    comin: '美食消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第五层',
                adds: '优盛大厦A605',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '设计公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  605',
                    shoptype: '设计',
                    comptype: '连锁店',
                    comin: '设计',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第二层',
                adds: '优盛大厦A602',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '欧莱雅',
                    addstitle: 'B座',
                    addssubtitle: '12层-3室  1203',
                    shoptype: '化妆品',
                    comptype: '旗舰店',
                    comin: '化妆品',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第三层',
                adds: '优盛大厦A603',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '电影院',
                    addstitle: 'A座',
                    addssubtitle: '12层-3室  603',
                    shoptype: '精神消费',
                    comptype: '旗舰店',
                    comin: '精神消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  福建  广西  陕西  云南  香港 ',
                }


            },
            {
                name: '优盛大厦',
                num: '第四层',
                adds: '优盛大厦A604',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '美食城',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  604',
                    shoptype: '美食',
                    comptype: '连锁店',
                    comin: '美食消费',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第五层',
                adds: '优盛大厦A605',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '设计公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  605',
                    shoptype: '设计',
                    comptype: '连锁店',
                    comin: '设计',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }, {
                name: '优盛大厦',
                num: '第六层',
                adds: '优盛大厦A606',
                price: '200万／年',
                type: '写字楼',
                zhuang: '精装',
                xiu: '5.00元/平米',
                staic: '货梯、扶梯、暖气、空调、水、网络',

                comData: {
                    proname: '程序公司',
                    addstitle: 'A座',
                    addssubtitle: '4层-3室  606',
                    shoptype: '程序',
                    comptype: '连锁店',
                    comin: '程序公司',
                    shopfrom: '北京  上海  杭州  广州  深圳  四川  河北 河南 山东 陕西',
                }


            }
        ],
        streetlist: [{
                num: "0101",
                name: "Dunkin'Donuts唐恩都乐",
                prace: '五道口购物中心1层0101',
                price: '200万／年',
                tel: '15410038892',
            },
            {
                num: "0102",
                name: "巴黎贝甜",
                prace: '五道口购物中心1层0102',
                price: '300万／年',
                tel: '15410030393',
            },
            {
                num: "0103",
                name: "WU club",
                prace: '五道口购物中心1层0103',
                price: '300万／年',
                tel: '19810030679',
            },
            {
                num: "0104",
                name: "哈根达斯",
                prace: '五道口购物中心1层0104',
                price: '200万／年',
                tel: '15410030081',
            }, {
                num: "0105",
                name: "星巴克",
                prace: '五道口购物中心1层0105',
                price: '200万／年',
                tel: '154100332322',
            },
            {
                num: "0106",
                name: "uniqlo",
                prace: '五道口购物中心1层0106',
                price: '200万／年',
                tel: '15410078393',
            },
            {
                num: "0107",
                name: "KFC",
                prace: '五道口购物中心1层0107',
                price: '300万／年',
                tel: '19811130679',
            },
            {
                num: "0108",
                name: "苹果",
                prace: '五道口购物中心1层0108',
                price: '250万／年',
                tel: '15410039065',
            }, {
                num: "0109",
                name: "'Dunkin'Donuts唐恩都乐",
                prace: '五道口购物中心1层0101',
                price: '200万／年',
                tel: '15410038892',
            },
            {
                num: "0110",
                name: "巴黎贝甜",
                prace: '五道口购物中心1层0102',
                price: '300万／年',
                tel: '15410030393',
            },
            {
                num: "0111",
                name: "WU club",
                prace: '五道口购物中心1层0103',
                price: '300万／年',
                tel: '19810030679',
            },
            {
                num: "0112",
                name: "哈根达斯",
                prace: '五道口购物中心1层0104',
                price: '200万／年',
                tel: '15410030081',
            }, {
                num: "0113",
                name: "星巴克",
                prace: '五道口购物中心1层0105',
                price: '200万／年',
                tel: '154100332322',
            },
            {
                num: "0114",
                name: "uniqlo",
                prace: '五道口购物中心1层0106',
                price: '200万／年',
                tel: '15410078393',
            },
            {
                num: "0115",
                name: "KFC",
                prace: '五道口购物中心1层0107',
                price: '300万／年',
                tel: '19811130679',
            },
            {
                num: "0116",
                name: "苹果",
                prace: '五道口购物中心1层0108',
                price: '250万／年',
                tel: '15410039065',
            }, {
                num: "0117",
                name: "'Dunkin'Donuts唐恩都乐",
                prace: '五道口购物中心1层0101',
                price: '200万／年',
                tel: '15410038892',
            },
            {
                num: "0118",
                name: "巴黎贝甜",
                prace: '五道口购物中心1层0102',
                price: '300万／年',
                tel: '15410030393',
            },
            {
                num: "0119",
                name: "WU club",
                prace: '五道口购物中心1层0103',
                price: '300万／年',
                tel: '19810030679',
            },
            {
                num: "0120",
                name: "哈根达斯",
                prace: '五道口购物中心1层0104',
                price: '200万／年',
                tel: '15410030081',
            }, {
                num: "0121",
                name: "星巴克",
                prace: '五道口购物中心1层0105',
                price: '200万／年',
                tel: '154100332322',
            },
            {
                num: "0122",
                name: "uniqlo",
                prace: '五道口购物中心1层0106',
                price: '200万／年',
                tel: '15410078393',
            },
            {
                num: "0123",
                name: "KFC",
                prace: '五道口购物中心1层0107',
                price: '300万／年',
                tel: '19811130679',
            },
            {
                num: "0124",
                name: "苹果",
                prace: '五道口购物中心1层0108',
                price: '250万／年',
                tel: '15410039065',
            }, {
                num: "0125",
                name: "'Dunkin'Donuts唐恩都乐",
                prace: '五道口购物中心1层0101',
                price: '200万／年',
                tel: '15410038892',
            },
            {
                num: "0126",
                name: "巴黎贝甜",
                prace: '五道口购物中心1层0102',
                price: '300万／年',
                tel: '15410030393',
            },
            {
                num: "0127",
                name: "WU club",
                prace: '五道口购物中心1层0103',
                price: '300万／年',
                tel: '19810030679',
            },
            {
                num: "0128",
                name: "哈根达斯",
                prace: '五道口购物中心1层0104',
                price: '200万／年',
                tel: '15410030081',
            }, {
                num: "0129",
                name: "星巴克",
                prace: '五道口购物中心1层0105',
                price: '200万／年',
                tel: '154100332322',
            },
            {
                num: "0130",
                name: "uniqlo",
                prace: '五道口购物中心1层0106',
                price: '200万／年',
                tel: '15410078393',
            },
            {
                num: "0131",
                name: "KFC",
                prace: '五道口购物中心1层0107',
                price: '300万／年',
                tel: '19811130679',
            },
            {
                num: "0132",
                name: "苹果",
                prace: '五道口购物中心1层0108',
                price: '250万／年',
                tel: '15410039065',
            }
        ],
        bannerlist: [{
            num: 'UNIQLO',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: '千叶',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'MISSHA',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'UNIQLO',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: '千叶',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'MISSHA',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'UNIQLO',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: '千叶',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'MISSHA',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'UNIQLO',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: '千叶',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'MISSHA',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'UNIQLO',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: '千叶',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }, {
            num: 'MISSHA',
            bannertype: '轮播图',
            bannerposition: '五道口购物中心1层001位',
            static: '正在投放',
            lasttime: '30天',
            price: '33.6万'
        }],
        dataList: [{
            name: '孙杰',
            prace: '五道口购物中心1层0101',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1540038892',
        }, {
            name: '王立东',
            prace: '五道口购物中心1层0102',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1380134862',
        }, {
            name: '李美华',
            prace: '五道口购物中心1层0103',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350403',
        }, {
            name: '罗本桥',
            prace: '五道口购物中心1层0104',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '17609355431',
        }, {
            name: '李薇薇',
            prace: '五道口购物中心1层0105',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15412900403',
        }, {
            name: '王美英',
            prace: '五道口购物中心1层0106',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '13102814053',
        }, {
            name: '桨华江',
            prace: '五道口购物中心1层0107',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350305',
        }, {
            name: '孙杰',
            prace: '五道口购物中心1层0101',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1540038892',
        }, {
            name: '王立东',
            prace: '五道口购物中心1层0102',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1380134862',
        }, {
            name: '李美华',
            prace: '五道口购物中心1层0103',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350403',
        }, {
            name: '罗本桥',
            prace: '五道口购物中心1层0104',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '17609355431',
        }, {
            name: '李薇薇',
            prace: '五道口购物中心1层0105',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15412900403',
        }, {
            name: '王美英',
            prace: '五道口购物中心1层0106',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '13102814053',
        }, {
            name: '桨华江',
            prace: '五道口购物中心1层0107',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350305',
        }, {
            name: '孙杰',
            prace: '五道口购物中心1层0101',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1540038892',
        }, {
            name: '王立东',
            prace: '五道口购物中心1层0102',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1380134862',
        }, {
            name: '李美华',
            prace: '五道口购物中心1层0103',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350403',
        }, {
            name: '罗本桥',
            prace: '五道口购物中心1层0104',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '17609355431',
        }, {
            name: '李薇薇',
            prace: '五道口购物中心1层0105',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15412900403',
        }, {
            name: '王美英',
            prace: '五道口购物中心1层0106',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '13102814053',
        }, {
            name: '桨华江',
            prace: '五道口购物中心1层0107',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350305',
        }, {
            name: '孙杰',
            prace: '五道口购物中心1层0101',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1540038892',
        }, {
            name: '王立东',
            prace: '五道口购物中心1层0102',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '1380134862',
        }, {
            name: '李美华',
            prace: '五道口购物中心1层0103',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350403',
        }, {
            name: '罗本桥',
            prace: '五道口购物中心1层0104',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '17609355431',
        }, {
            name: '李薇薇',
            prace: '五道口购物中心1层0105',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15412900403',
        }, {
            name: '王美英',
            prace: '五道口购物中心1层0106',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '13102814053',
        }, {
            name: '桨华江',
            prace: '五道口购物中心1层0107',
            startTime: '2017-12-27',
            endTime: '2017-12-27',
            lastTime: '365天',
            tel: '15400350305',
        }],
        revenenue: [{
            name: '电费',
            comeForm: '五道口购物中心0101',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0102',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0103',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0104',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0105',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0106',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0107',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0108',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0109',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0110',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0111',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0112',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0113',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0114',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0115',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0116',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0117',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0118',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0119',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0120',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0121',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, {
            name: '电费',
            comeForm: '五道口购物中心0122',
            purpose: '支出',
            money: '500.00元',
            createTime: '2017-12-27'
        }, {
            name: '税费',
            comeForm: '五道口购物中心0123',
            purpose: '支出',
            money: '1500.00元',
            createTime: '2017-12-27'
        }, {
            name: '物业费',
            comeForm: '五道口购物中心0124',
            purpose: '支出',
            money: '1000.00元',
            createTime: '2017-12-27'
        }, ],
        shop: [{
                name: '五道口购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '欧美汇购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '新奥购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '新中关购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '圣熙8号购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '北京华联万柳购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '华宇时尚购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '枫蓝国际购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '华联购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '翠微百货',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '天虹百货',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '双安商场',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '五道口购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '欧美汇购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '新奥购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '新中关购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '圣熙8号购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '北京华联万柳购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '华宇时尚购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '枫蓝国际购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '华联购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '翠微百货',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '天虹百货',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '双安商场',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '五道口购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '欧美汇购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '新奥购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '新中关购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '圣熙8号购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '北京华联万柳购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '华宇时尚购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '枫蓝国际购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '华联购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '翠微百货',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '天虹百货',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '双安商场',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '五道口购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '欧美汇购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '新奥购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            }, {
                name: '新中关购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '圣熙8号购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '北京华联万柳购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '华宇时尚购物中心',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '枫蓝国际购物中心',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '华联购物中心',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
            {
                name: '翠微百货',
                total: '5000万㎡',
                rented: '4000万㎡',
                lieIdle: '1000万㎡',
                ratio: '80%'
            },
            {
                name: '天虹百货',
                total: '8000万㎡',
                rented: '7000万㎡',
                lieIdle: '1000万㎡',
                ratio: '87.5%'
            },
            {
                name: '双安商场',
                total: '10000万㎡',
                rented: '9000万㎡',
                lieIdle: '1000万㎡',
                ratio: '90%'
            },
        ],
        adminList: [{
            name: '张杰',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '王立东',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '李美华',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 09:12:30',
            static: '启用'
        }, {
            name: '罗本桥',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 10:12:30',
            static: '启用'
        }, {
            name: '李薇薇',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 11:12:30',
            static: '启用'
        }, {
            name: '王秀英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 12:12:30',
            static: '启用'
        }, {
            name: '蒋华江',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 13:12:30',
            static: '启用'
        }, {
            name: '梁文栋',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 14:12:30',
            static: '启用'
        }, {
            name: '黄中英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 15:12:30',
            static: '启用'
        }, {
            name: '王可可',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 16:12:30',
            static: '启用'
        }, {
            name: '张杰',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '王立东',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '李美华',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 09:12:30',
            static: '启用'
        }, {
            name: '罗本桥',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 10:12:30',
            static: '启用'
        }, {
            name: '李薇薇',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 11:12:30',
            static: '启用'
        }, {
            name: '王秀英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 12:12:30',
            static: '启用'
        }, {
            name: '蒋华江',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 13:12:30',
            static: '启用'
        }, {
            name: '梁文栋',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 14:12:30',
            static: '启用'
        }, {
            name: '黄中英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 15:12:30',
            static: '启用'
        }, {
            name: '王可可',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 16:12:30',
            static: '启用'
        }, {
            name: '张杰',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '王立东',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '李美华',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 09:12:30',
            static: '启用'
        }, {
            name: '罗本桥',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 10:12:30',
            static: '启用'
        }, {
            name: '李薇薇',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 11:12:30',
            static: '启用'
        }, {
            name: '王秀英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 12:12:30',
            static: '启用'
        }, {
            name: '蒋华江',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 13:12:30',
            static: '启用'
        }, {
            name: '梁文栋',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 14:12:30',
            static: '启用'
        }, {
            name: '黄中英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 15:12:30',
            static: '启用'
        }, {
            name: '王可可',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 16:12:30',
            static: '启用'
        }, {
            name: '张杰',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '王立东',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 08:12:30',
            static: '启用'
        }, {
            name: '李美华',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 09:12:30',
            static: '启用'
        }, {
            name: '罗本桥',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 10:12:30',
            static: '启用'
        }, {
            name: '李薇薇',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 11:12:30',
            static: '启用'
        }, {
            name: '王秀英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 12:12:30',
            static: '启用'
        }, {
            name: '蒋华江',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 13:12:30',
            static: '启用'
        }, {
            name: '梁文栋',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 14:12:30',
            static: '启用'
        }, {
            name: '黄中英',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 15:12:30',
            static: '启用'
        }, {
            name: '王可可',
            type: '普通管理员',
            department: '财务部',
            creatTime: '2017-09-19 16:12:30',
            static: '启用'
        }],
        tenment: [{
                num: '01',
                name: '创业文化产业园',
                number: '33套 333㎡',
                rented: '11套 111㎡',
                notrent: '22套 222㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '02',
                name: '三里屯太古里',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '03',
                name: '世贸天阶',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '04',
                name: '望京国际产a业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '05',
                name: '朝阳大悦城',
                number: '33套 333㎡',
                rented: '11套 111㎡',
                notrent: '22套 222㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '06',
                name: '银座mall',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '07',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '08',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '09',
                name: '创业文化产业园',
                number: '33套 333㎡',
                rented: '11套 111㎡',
                notrent: '22套 222㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '10',
                name: '三里屯太古里',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '11',
                name: '世贸天阶',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '12',
                name: '望京国际产a业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '13',
                name: '朝阳大悦城',
                number: '33套 333㎡',
                rented: '11套 111㎡',
                notrent: '22套 222㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '14',
                name: '银座mall',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '15',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '16',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '广州'
            }, {
                num: '17',
                name: '世贸天阶',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '18',
                name: '望京国际产a业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '19',
                name: '朝阳大悦城',
                number: '33套 333㎡',
                rented: '11套 111㎡',
                notrent: '22套 222㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '20',
                name: '银座mall',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '21',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '22',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '21',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '22',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '23',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '24',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '广州'
            },
            {
                num: '25',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '上海'
            },
            {
                num: '26',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '北京'
            },
            {
                num: '27',
                name: '米拉广场',
                number: '33套 333㎡',
                rented: '10套 111㎡',
                notrent: '20套 322㎡',
                rate: '33.33%',
                adds: '深圳'
            },
            {
                num: '28',
                name: '世纪金源产业园',
                number: '30套 300㎡',
                rented: '10套 100㎡',
                notrent: '20套 300㎡',
                rate: '33.33%',
                adds: '广州'
            },
        ],

        dot: [{
                num: '01',
                name: '创业文化产业园在线网点',
                place: '北京海淀区五道口',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '02',
                name: '三里屯太古里在线网点',
                place: '北京朝阳区三里屯',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '03',
                name: '创业文化产业园在线网点',
                place: '上海市宝山区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            },
            {
                num: '04',
                name: '三里屯太古里在线网点',
                place: '上海市浦东新区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            }, {
                num: '05',
                name: '创业文化产业园在线网点',
                place: '广州市天河区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '06',
                name: '三里屯太古里在线网点',
                place: '广州市荔湾区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '07',
                name: '创业文化产业园在线网点',
                place: '深圳市福田区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '08',
                name: '三里屯太古里在线网点',
                place: '深圳市南山区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            }, {
                num: '09',
                name: '创业文化产业园在线网点',
                place: '北京海淀区五道口',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '10',
                name: '三里屯太古里在线网点',
                place: '北京朝阳区三里屯',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '11',
                name: '创业文化产业园在线网点',
                place: '上海市宝山区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            },
            {
                num: '12',
                name: '三里屯太古里在线网点',
                place: '上海市浦东新区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            }, {
                num: '13',
                name: '创业文化产业园在线网点',
                place: '广州市天河区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '14',
                name: '三里屯太古里在线网点',
                place: '广州市荔湾区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '15',
                name: '创业文化产业园在线网点',
                place: '深圳市福田区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '16',
                name: '三里屯太古里在线网点',
                place: '深圳市南山区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '17',
                name: '创业文化产业园在线网点',
                place: '北京海淀区五道口',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '18',
                name: '三里屯太古里在线网点',
                place: '北京朝阳区三里屯',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '19',
                name: '创业文化产业园在线网点',
                place: '上海市宝山区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            },
            {
                num: '20',
                name: '三里屯太古里在线网点',
                place: '上海市浦东新区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            }, {
                num: '21',
                name: '创业文化产业园在线网点',
                place: '广州市天河区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '22',
                name: '三里屯太古里在线网点',
                place: '广州市荔湾区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '23',
                name: '创业文化产业园在线网点',
                place: '深圳市福田区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '24',
                name: '三里屯太古里在线网点',
                place: '深圳市南山区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '24',
                name: '创业文化产业园在线网点',
                place: '北京海淀区五道口',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '26',
                name: '三里屯太古里在线网点',
                place: '北京朝阳区三里屯',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '北京'
            },
            {
                num: '27',
                name: '创业文化产业园在线网点',
                place: '上海市宝山区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            },
            {
                num: '28',
                name: '三里屯太古里在线网点',
                place: '上海市浦东新区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '上海'
            }, {
                num: '29',
                name: '创业文化产业园在线网点',
                place: '广州市天河区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '30',
                name: '三里屯太古里在线网点',
                place: '广州市荔湾区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '广州'
            },
            {
                num: '31',
                name: '创业文化产业园在线网点',
                place: '深圳市福田区',
                area: '333㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            },
            {
                num: '32',
                name: '三里屯太古里在线网点',
                place: '深圳市南山区',
                area: '300㎡',
                starttime: '2018-01-03',
                staic: '在线',
                adds: '深圳'
            }
        ],
        customer: [{
                createtime: '2018-01-03',
                name: '创业文化产业园',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '三里屯太古里',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '世贸天阶',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '望京国际产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            }, {
                createtime: '2018-01-02',
                name: '朝阳大悦城',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-03',
                name: '银座mall',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '米拉广场',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '翠微产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            }, {
                createtime: '2018-01-03',
                name: '创业文化产业园',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '三里屯太古里',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '世贸天阶',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '望京国际产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            }, {
                createtime: '2018-01-02',
                name: '朝阳大悦城',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-03',
                name: '银座mall',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '米拉广场',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '翠微产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            }, {
                createtime: '2018-01-03',
                name: '创业文化产业园',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '三里屯太古里',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '世贸天阶',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '望京国际产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            }, {
                createtime: '2018-01-02',
                name: '朝阳大悦城',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-03',
                name: '银座mall',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '米拉广场',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '翠微产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            }, {
                createtime: '2018-01-03',
                name: '创业文化产业园',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '三里屯太古里',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '世贸天阶',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-03'
            },
            {
                createtime: '2018-01-03',
                name: '望京国际产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-03'
            }, {
                createtime: '2018-01-02',
                name: '朝阳大悦城',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-03',
                name: '银座mall',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '米拉广场',
                need: '33 · 333㎡',
                static: '初步交流',
                run: '2018-01-02'
            },
            {
                createtime: '2018-01-02',
                name: '翠微产业园',
                need: '20 · 300㎡',
                static: '初步交流',
                run: '2018-01-02'
            }
        ],
        merchant: [{
                name: '苏宁电器',
                place: '北京海淀区五道口',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '国美家电',
                place: '北京朝阳区三里屯',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '美的电器',
                place: '北京朝阳区世贸天阶',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '天猫超市',
                place: '北京朝阳区望京',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '长虹电视',
                place: '北京朝阳区大悦城',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '华为手机',
                place: '北京东城区银座',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '松下电器',
                place: '北京通州区米拉',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '飞利浦电器',
                place: '北京海淀区世纪金源',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            }, {
                name: '苏宁电器',
                place: '北京海淀区五道口',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '国美家电',
                place: '北京朝阳区三里屯',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '美的电器',
                place: '北京朝阳区世贸天阶',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '天猫超市',
                place: '北京朝阳区望京',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '长虹电视',
                place: '北京朝阳区大悦城',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '华为手机',
                place: '北京东城区银座',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '松下电器',
                place: '北京通州区米拉',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '飞利浦电器',
                place: '北京海淀区世纪金源',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            }, {
                name: '苏宁电器',
                place: '北京海淀区五道口',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '国美家电',
                place: '北京朝阳区三里屯',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '美的电器',
                place: '北京朝阳区世贸天阶',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '天猫超市',
                place: '北京朝阳区望京',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '长虹电视',
                place: '北京朝阳区大悦城',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '华为手机',
                place: '北京东城区银座',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '松下电器',
                place: '北京通州区米拉',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '飞利浦电器',
                place: '北京海淀区世纪金源',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            }, {
                name: '苏宁电器',
                place: '北京海淀区五道口',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '国美家电',
                place: '北京朝阳区三里屯',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '美的电器',
                place: '北京朝阳区世贸天阶',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '天猫超市',
                place: '北京朝阳区望京',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '长虹电视',
                place: '北京朝阳区大悦城',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '华为手机',
                place: '北京东城区银座',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '松下电器',
                place: '北京通州区米拉',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            },
            {
                name: '飞利浦电器',
                place: '北京海淀区世纪金源',
                starttime: '2018-01-03',
                endtime: '2019-01-03',
                surplustime: '365天',
            }
        ],
        contractadmin: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2018-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-06',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-07',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2018-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                timeed: '2018-01-04'
            },
        ],
        contractrev: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2018-01-03',

                static: '已通过',
            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '无',
                static: '未通过',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

                static: '已通过',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',

                static: '已通过',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-06',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-07',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',
                static: '已通过',
            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '无',
                static: '未通过',
            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',
                static: '已通过',
            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2018-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',
                static: '已通过',
            },
        ],


        contract: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2018-01-03',

            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',

            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-06',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-07',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',

            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-08',
                name: '创业文化产业园',
                number: '3栋-5层-01',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-09',
                name: '三里屯太古里',
                number: '3栋-5层-02',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-10',
                name: '世贸天阶',
                number: '3栋-5层-03',
                startdata: '2018-01-03',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-11',
                name: '望京国际产业园',
                number: '3栋-5层-04',
                startdata: '2018-01-04',
                enddata: '2019-01-03',

            }, {
                num: 'asd2018-01-12',
                name: '朝阳大悦城',
                number: '3栋-5层-05',
                startdata: '2018-01-05',
                enddata: '2018-01-03',

            },
            {
                num: 'asd2018-01-13',
                name: '米拉广场',
                number: '3栋-5层-06',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
            {
                num: 'asd2018-01-14',
                name: '世纪金源产业园',
                number: '3栋-5层-07',
                startdata: '2018-01-05',
                enddata: '2019-01-03',

            },
        ],
        rentmgt: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                worknum: '3栋-5层-01',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                worknum: '3栋-5层-02',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                money: '3000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                money: '3000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '创业文化产业园',
                worknum: '3栋-5层-13',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-14',
                name: '三里屯太古里',
                worknum: '3栋-5层-14',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                money: '3000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                money: '3000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                money: '2000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                money: '3000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '银座mall',
                worknum: '3栋-5层-13',
                money: '3000.00元',
                area: '300㎡',
            },
        ],
        marginmgt: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                worknum: '3栋-5层-01',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                worknum: '3栋-5层-02',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                money: '300000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                money: '300000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '创业文化产业园',
                worknum: '3栋-5层-13',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-14',
                name: '三里屯太古里',
                worknum: '3栋-5层-14',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                money: '300000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                money: '300000.00元',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                money: '200000.00元',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                money: '300000.00元',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '银座mall',
                worknum: '3栋-5层-13',
                money: '300000.00元',
                area: '300㎡',
            },
        ],
        retirestt: [{
                num: 'asd2018-01-01',
                name: '创业文化产业园',
                worknum: '3栋-5层-01',
                user: '1111',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-02',
                name: '三里屯太古里',
                worknum: '3栋-5层-02',
                user: '2222',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                user: '1111',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                user: '3333',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                user: '4444',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                user: '55555',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                user: '6666',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                user: '7777',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                user: '21212',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                user: '2321',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                user: '4342',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                user: '4234',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '创业文化产业园',
                worknum: '3栋-5层-13',
                user: '6456',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-14',
                name: '三里屯太古里',
                worknum: '3栋-5层-14',
                user: '1111',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-03',
                name: '世贸天阶',
                worknum: '3栋-5层-03',
                user: '1111',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-04',
                name: '望京国际产业园',
                worknum: '3栋-5层-04',
                user: '1111',
                area: '300㎡',
            }, {
                num: 'asd2018-01-05',
                name: '朝阳大悦城',
                worknum: '3栋-5层-05',
                user: '1111',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-06',
                name: '银座mall',
                worknum: '3栋-5层-06',
                user: '1111',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-07',
                name: '米拉广场',
                worknum: '3栋-5层-07',
                user: '4324',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-08',
                name: '三里屯太古里',
                worknum: '3栋-5层-08',
                user: '1111',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-09',
                name: '世贸天阶',
                worknum: '3栋-5层-09',
                user: '8768',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-10',
                name: '望京国际产业园',
                worknum: '3栋-5层-10',
                user: '8768',
                area: '300㎡',
            }, {
                num: 'asd2018-01-11',
                name: '朝阳大悦城',
                worknum: '3栋-5层-11',
                user: '1111',
                area: '200㎡',
            },
            {
                num: 'asd2018-01-12',
                name: '银座mall',
                worknum: '3栋-5层-12',
                user: '1111',
                area: '300㎡',
            },
            {
                num: 'asd2018-01-13',
                name: '银座mall',
                worknum: '3栋-5层-13',
                user: '1111',
                area: '300㎡',
            },
        ],






    },
    getters: {
        doneTodos: (state) => {
            return state.hotelAdminList;
        },
        shopstreetdoneTodos: (state) => {
            return state.shopstreetAdminList;
        }

    },

    mutations: {
        showarc(state, dataOBJ) {
            if (dataOBJ != undefined) {
                state.proname = dataOBJ.comData.proname;
                state.addstitle = dataOBJ.comData.addstitle;
                state.addssubtitle = dataOBJ.comData.addssubtitle;
                state.shoptype = dataOBJ.comData.shoptype;
                state.comptype = dataOBJ.comData.comptype;
                state.comin = dataOBJ.comData.comin;
                state.shopfrom = dataOBJ.comData.shopfrom;

            }
            state.block = !state.block
        },

        submitData(state, data) {
            /**
             * 提交审核  产业园>合同管理>待提交项目>提交
             * 提交到合同审核页面 
             **/
            let _index;
            for (let i = 0; i < state.contract.length; i++) {
                if (state.contract[i] === data.row) {
                    _index = i;
                }
            }
            state.contract.splice(_index, 1);
            data.row.static = '待审核';
            state.contractrev.unshift(data.row);
        },
        addHome(state, data) {
            /**
             * 添加空闲房，增加一个参数 homeState 并设置未空闲
             */
            data.formData.homeState = "空闲";
            state.homeData.unshift(data.formData);
        },
        homelive(state, data) {
            /**
             * 添加入住信息 包括了：酒店预订、酒店入住
             * 函数实现：预订包含了入住时间和退房时间
             *          入住不包含退房时间
             * 所以需要判断传入的对象是否包含intime和outtime 如果有的话
             * 就把intime和outtime替换 如果没有就获取当前的时间
             * 
             * **/
            data.formData.shoule = data.formData.meney;

            if (data.formData.hasOwnProperty('intime') && data.formData.hasOwnProperty('outtime')) {
                data.formData.intime = data.formData.intime.toLocaleString()
                data.formData.outtime = data.formData.outtime.toLocaleString()
            } else {
                let myDate = new Date();
                data.formData.intime = myDate.toLocaleString();
                data.formData.outtime = "未知";
            }

            state.live.unshift(data.formData);
            state.homeData = state.homeData.filter((value) => value.homeNum != data.formData.homeNum);
        },
        changevalue(state, message) {
            /**
             * 修改名称的函数 
             * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
             *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
             *          ps：12是我一页有多少数据
             */
            let num = (message.page - 1) * 12 + message.num
            state.hotelAdminList[num].name = message.storevalue;
        },
        shopstreetChangevalue(state, message) {
            /**
             * 修改名称的函数 
             * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
             *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
             *          ps：12是我一页有多少数据
             */
            let num = (message.page - 1) * 12 + message.num
            state.shopstreetAdminList[num].name = message.storevalue;
        },
        deleteData: (state, num) => {
            /**
             * 删除管理员 
             * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
             *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
             *          ps：12是我一页有多少数据
             */
            let z = state.hotelAdminList[(num.page - 1) * 12 + num.index];
            state.hotelAdminList = state.hotelAdminList.filter(arrdata => {
                return !(arrdata === z);
            })
        },
        shopstreetDeleteData: (state, num) => {
            /**
             * 删除管理员 
             * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
             *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
             *          ps：12是我一页有多少数据
             */
            let z = state.shopstreetAdminList[(num.page - 1) * 12 + num.index];
            state.shopstreetAdminList = state.shopstreetAdminList.filter(arrdata => {
                return !(arrdata === z);
            })
        },

        changevalue3(state, message) {

            state.personouser[message.num].name = message.storevalue;
        },
        changevalue4(state, message) {
            // 商业街 商铺管理 商铺列表 编辑
            state.streetlist[message.num].name = message.storevalue;
        },
        liveS(state, data) {
            /**
             * 后期可以吧所有信息放到表单  通过输入获取
             * 酒店》房间展示》申请入驻
             */

            data.msg.shoule = data.msg.homePrice;
            data.msg.meney = data.msg.homePrice;
            data.msg.name = '无';
            data.msg.peo = '无';
            data.msg.tel = '无';
            let myDate = new Date();
            data.msg.intime = myDate.toLocaleString();
            data.msg.outtime = "未知";
            console.log(data.msg);
            state.live.unshift(data.msg);
            state.homeData = state.homeData.filter((value) => value.homeNum != data.msg.homeNum);
        },
        addvip(state, data) {
            /**
             * 酒店》会员》添加会员
             */
            data.formData.peo = data.formData.peo.replace(/^(.{6})(?:\d+)(.{4})$/, "$1****$2");
            let myDate = new Date();
            data.formData.intime = myDate.toLocaleString();
            data.formData.meney = "00.00"
            state.viper.unshift(data.formData);
        },
        hotelexit(state, data) {
            // 酒店退房
            let date = new Date();
            data.outtime = date.toLocaleString();
            state.lenve.unshift(data);
            state.live = state.live.filter((value) => {
                return value.homeNum != data.homeNum
            })

            /**
             * 
             * 因为数据没有统一，暂时没有写退房后让房间展示页面增加对应的房间
             * 后期如果真正上线  数据统一后 可以让房间展示页面增加对应的房间
             * 需要的话可以自行更改。 现在还需要在提交入住时候顺便
             * 吧房间所有信息展示了，如果是统一数据直接调用下面这句话即可
             * state.homeData.unshift(data)
             */
        },
        addAdmin(state, data) {
            /**
             * 酒店增加管理员功能，通过生成时间戳作为唯一key值
             * 因为时间原因，没有吧参数合并，后期优化中可以将函数封装一下
             * 通过多上传一个参数来判断要修改的表，ps：最好是直接吧要修改的表的数据直接传递过来，防止出错
             */
            let date = new Date();
            data.creat = date.toLocaleString();
            data.jurone = true,
                data.jurtwo = true,
                data.jurthree = true,
                data.key = Date.parse(new Date())
            state.hotelAdminList.unshift(data);
        },
        shopstreetAddAdmin(state, data) {
            /**
             * 商业街增加管理员功能，通过生成时间戳作为唯一key值
             */
            let date = new Date();
            data.creat = date.toLocaleString();
            data.jurone = true,
                data.jurtwo = true,
                data.jurthree = true,
                data.key = Date.parse(new Date())
            state.shopstreetAdminList.unshift(data);
        },
        purChange(state, data) {
            /***
             * 酒店修改管理员权限
             * **/
            state.hotelAdminList.filter((value) => {
                return data.key == value.key;
            })[0] = data;

        },
        shopstreetPurChange(state, data) {
            /***
             * 商业街修改管理员权限
             * **/
            state.shopstreetAdminList.filter((value) => {
                return data.key == value.key;
            })[0] = data;

        },
        addBanner(state, data) {
            /***
             * 
             * 
             * 商业街》广告位管理》添加广告位
             * 功能：增加广告位列表的展现
             * 
             * num等于1 就是添加广告位，也就是招商
             * num 2 是添加投放
             * */
            if (data.num == 1) {
                data.formData.price = data.formData.price + "万";
                data.formData.static = "正在招商";

            } else if (data.num == 2) {
                data.formData.price = data.formData.price + "元／天";
                data.formData.static = "正在投放";
            } else {
                return false;
            }
            state.bannerlist.unshift(data.formData);
        },
        addshowstreet(state, data) {
            /***
             * 商业街》招商管理》添加商铺
             * */
            state.showstreet.unshift(data.formData);

        },






        addCar(state, data) {
            /***
             * 住宅》物业人员管理》添加车辆
             * 住宅>住户管理》添加车辆
             *
             */
            console.log(data);
            data.formData.menoy = 0;

            if (data.sign == "addCar") {
                state.caradmin.unshift(data.formData)
            } else if (data.sign == "livecaradmin") {
                state.livecaradmin.unshift(data.formData)
            } else {
                reject();
            }


        },
        addpersonouser(state, data) {
            /***
             * 住宅》物业人员管理》添加车辆
             * 
             */
            state.personouser.unshift(data);

        },






    },
    actions: {
        timeFormat({ commit }, time) {
            console.log(time);
            // 格式化时间
            return new Promise((resolve, reject) => {
                time = time.toLocaleString()
                resolve(time);
            })
        },

    },

    // 因前期没有规划好。导致无法按照模块划分，后期想要统一使用如下
    modules: {
        home: {
            state: {

                homelistContent: [{
                    name: '张杰22',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '张杰',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '张杰',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '张杰',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '张杰',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '张杰',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '王立东',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李美华',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '罗本桥',
                    sex: '男',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'
                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, {
                    name: '李薇薇',
                    sex: '女',
                    tel: '18810451900',
                    address: '幸福小区3号楼501',
                    intime: '2017-09-19  08:12:30',
                    type: '居住中'

                }, ],

            },
            mutations: {
                changevalue2(state, message) {
                    state.homelistContent[message.num].name = message.storevalue;
                },
                deleteData2: (state, num) => {
                    let z = state.homelistContent[num];

                    state.homelistContent = state.homelistContent.filter(arrdata => {
                        return !(arrdata === z);
                    })
                },
                addliveperson(state, data) {
                    /***
                     * 住宅》物业人员管理》添加业主
                     * 
                     */
                    data.sex = "未知"

                    state.homelistContent.unshift(data);

                },
            },
            getters: {
                homelistContent2: (state) => {
                    return state.homelistContent;
                }
            }
        },
        /***
         * 
         * ppp
         * */
        pppProject: {
            state: {
                /***
                 * 
                 * ppp->项目库管理->入驻企业
                 * */
                settledEnterprise: [{
                    projectname: '中国ppp基金',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',


                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "230平方米",
                    year: "2年",
                    estimate: "3160万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '中国ppp基金',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "235平方米",
                    year: "1年",
                    estimate: "3250万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '巴安水务',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "240平方米",
                    year: "4年",
                    estimate: "3250万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '映丰环境公司',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "250平方米",
                    year: "3年",
                    estimate: "3160万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '新沃资本',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "260平方米",
                    year: "2年",
                    estimate: "3250万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '盛世神州基金',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "130平方米",
                    year: "1年",
                    estimate: "3250万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '恒银中嘉基金管理',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "330平方米",
                    year: "2年",
                    estimate: "3160万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '长富汇银基金管理',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "230平方米",
                    year: "2年",
                    estimate: "3160万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '德信资本',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "330平方米",
                    year: "3年",
                    estimate: "3250万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '泰发基金',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "330平方米",
                    year: "3年",
                    estimate: "3160万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '中国投资咨询',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "270平方米",
                    year: "3年",
                    estimate: "3160万元",
                    isstore: "是",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '中城投资',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    creattime: '2017-09-19 08:12:30',
                    addstitle: "B座",
                    arc: "270平方米",
                    year: "3年",
                    estimate: "3160万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                }, {
                    projectname: '鼎信长城基金',
                    projectattr: 'ppp属性',
                    projecttype: '理财项目',
                    field: '事业单位',
                    addstitle: "B座",
                    arc: "270平方米",
                    year: "3年",
                    estimate: "3160万元",
                    isstore: "否",
                    content: "理财办公楼、文化设施建设、绿化建设",
                    tel: "13815933589",
                    addssubtitle: "昌平人民政府  1203",
                    creattime: '2017-09-19 08:12:30',
                }, ],

                block: false,
                projectname: '鼎信长城基金',
                projectattr: 'ppp属性',
                projecttype: '理财项目',
                field: '事业单位',
                addstitle: "B座",
                arc: "250平方米",
                year: "3年",
                estimate: "3250万元",
                isstore: "是",
                content: "理财办公楼、文化设施建设、绿化建设",
                tel: "13815933589",
                addssubtitle: "昌平人民政府  1203",
                creattime: '2017-09-19 08:12:30',


                investmentname: "义乌市再生资源利用中心",
                investmentmoney: "37451万元",
                investmentfunc: "委托运营",
                projectstaic: "www.harchn.com",
                projectsay: "项目介绍",
                investment: [{
                        investmentname: "义乌市再生资源利用中心",
                        investmentmoney: "37451万元",
                        investmentfunc: "委托运营",
                        field: "自然资源",
                        creattime: "2019-09-30",
                        exitfunc: "并购",
                        investmentpreson: "李振杰",
                        investmentage: "3年",
                        money: "47451万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "月柿小镇",
                        investmentmoney: "21783万元",
                        investmentfunc: "合作运营",
                        field: "自然资源",
                        creattime: "2019-09-29",
                        exitfunc: "并购",
                        investmentpreson: "梁贻凌",
                        investmentage: "2年",
                        money: "31783万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1204",
                    },
                    {
                        investmentname: "航空小镇",
                        investmentmoney: "30813万元",
                        investmentfunc: "合作运营",
                        field: "建设资源",
                        creattime: "2019-09-28",
                        exitfunc: "并购",
                        investmentpreson: "任鹏飞",
                        investmentage: "2年",
                        money: "40813万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "成语小镇",
                        investmentmoney: "19032万元",
                        investmentfunc: "委托运营",
                        field: "文化资源",
                        creattime: "2019-09-27",
                        exitfunc: "并购",
                        investmentpreson: "赵宇思",
                        investmentage: "2年",
                        money: "29032万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1204",
                    }, {
                        investmentname: "义乌市再生资源利用中心",
                        investmentmoney: "37451万元",
                        investmentfunc: "委托运营",
                        field: "自然资源",
                        creattime: "2019-09-30",
                        exitfunc: "并购",
                        investmentpreson: "李振杰",
                        investmentage: "3年",
                        money: "47451万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "月柿小镇",
                        investmentmoney: "21783万元",
                        investmentfunc: "合作运营",
                        field: "自然资源",
                        creattime: "2019-09-29",
                        exitfunc: "并购",
                        investmentpreson: "梁贻凌",
                        investmentage: "2年",
                        money: "31783万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1204",
                    },
                    {
                        investmentname: "航空小镇",
                        investmentmoney: "30813万元",
                        investmentfunc: "合作运营",
                        field: "建设资源",
                        creattime: "2019-09-28",
                        exitfunc: "并购",
                        investmentpreson: "任鹏飞",
                        investmentage: "2年",
                        money: "40813万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "成语小镇",
                        investmentmoney: "19032万元",
                        investmentfunc: "委托运营",
                        field: "文化资源",
                        creattime: "2019-09-27",
                        exitfunc: "并购",
                        investmentpreson: "赵宇思",
                        investmentage: "2年",
                        money: "29032万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1204",
                    }, {
                        investmentname: "义乌市再生资源利用中心",
                        investmentmoney: "37451万元",
                        investmentfunc: "委托运营",
                        field: "自然资源",
                        creattime: "2019-09-30",
                        exitfunc: "并购",
                        investmentpreson: "李振杰",
                        investmentage: "3年",
                        money: "47451万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "月柿小镇",
                        investmentmoney: "21783万元",
                        investmentfunc: "合作运营",
                        field: "自然资源",
                        creattime: "2019-09-29",
                        exitfunc: "并购",
                        investmentpreson: "梁贻凌",
                        investmentage: "2年",
                        money: "31783万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1204",
                    },
                    {
                        investmentname: "航空小镇",
                        investmentmoney: "30813万元",
                        investmentfunc: "合作运营",
                        field: "建设资源",
                        creattime: "2019-09-28",
                        exitfunc: "并购",
                        investmentpreson: "任鹏飞",
                        investmentage: "2年",
                        money: "40813万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "成语小镇",
                        investmentmoney: "19032万元",
                        investmentfunc: "委托运营",
                        field: "文化资源",
                        creattime: "2019-09-27",
                        exitfunc: "并购",
                        investmentpreson: "赵宇思",
                        investmentage: "2年",
                        money: "29032万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1204",
                    }, {
                        investmentname: "义乌市再生资源利用中心",
                        investmentmoney: "37451万元",
                        investmentfunc: "委托运营",
                        field: "自然资源",
                        creattime: "2019-09-30",
                        exitfunc: "并购",
                        investmentpreson: "李振杰",
                        investmentage: "3年",
                        money: "47451万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "月柿小镇",
                        investmentmoney: "21783万元",
                        investmentfunc: "合作运营",
                        field: "自然资源",
                        creattime: "2019-09-29",
                        exitfunc: "并购",
                        investmentpreson: "梁贻凌",
                        investmentage: "2年",
                        money: "31783万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "B座",
                        addssubtitle: "昌平人民政府  1204",
                    },
                    {
                        investmentname: "航空小镇",
                        investmentmoney: "30813万元",
                        investmentfunc: "合作运营",
                        field: "建设资源",
                        creattime: "2019-09-28",
                        exitfunc: "并购",
                        investmentpreson: "任鹏飞",
                        investmentage: "2年",
                        money: "40813万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1203",
                    },
                    {
                        investmentname: "成语小镇",
                        investmentmoney: "19032万元",
                        investmentfunc: "委托运营",
                        field: "文化资源",
                        creattime: "2019-09-27",
                        exitfunc: "并购",
                        investmentpreson: "赵宇思",
                        investmentage: "2年",
                        money: "29032万元",
                        projectstaic: "www.harchn.com",
                        projectsay: "项目介绍",
                        addstitle: "A座",
                        addssubtitle: "昌平人民政府  1204",
                    }
                ],
                bulletinText: [{
                    procurement: "义乌市再生资源利用中心",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "月柿小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "航天小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "成语小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "盛世神州基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "北京中骏投资有限公司",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "长富汇银基金管理",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "德信资本",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "泰发基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "义乌市再生资源利用中心",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "月柿小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "航天小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "成语小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "盛世神州基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "北京中骏投资有限公司",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "长富汇银基金管理",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "德信资本",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "泰发基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "义乌市再生资源利用中心",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "月柿小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "航天小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "成语小镇",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "盛世神州基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "北京中骏投资有限公司",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "长富汇银基金管理",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "德信资本",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, {
                    procurement: "泰发基金",
                    num: "指各采购项目的计划采购量",
                    model: "指各计划采购项目的配置标准",
                    source: "指单位用于政府采购项目的支出计划",
                    time: "政府采购的基本方式是公开招标"
                }, ],
                profitlist: [
                    // ppp->项目收益分析->收益列表
                    {
                        // 名称
                        projectname: "义乌市再生资源利用中心",
                        //年限
                        investmentage: "3年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 30000,
                    }, {
                        // 名称
                        projectname: "月柿小镇",
                        //年限
                        investmentage: "1年",
                        // 年化收益率
                        rateofyear: 5.8,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 20000,
                    }, {
                        // 名称
                        projectname: "航空小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 6.0,
                        //投资金额
                        investmentmoney: 30,
                        // 总金额
                        money: 31000,
                    }, {
                        // 名称
                        projectname: "成语小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    },
                    {
                        // 名称
                        projectname: "盛世神州基金",
                        //年限
                        investmentage: "3年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 30000,
                    }, {
                        // 名称
                        projectname: "北京中骏投资有线公司",
                        //年限
                        investmentage: "1年",
                        // 年化收益率
                        rateofyear: 5.8,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 20000,
                    }, {
                        // 名称
                        projectname: "常服汇银",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 6.0,
                        //投资金额
                        investmentmoney: 30,
                        // 总金额
                        money: 31000,
                    }, {
                        // 名称
                        projectname: "泰发基金",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    }, {
                        // 名称
                        projectname: "德信资本",
                        //年限
                        investmentage: "3年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 30000,
                    }, {
                        // 名称
                        projectname: "巴安水务",
                        //年限
                        investmentage: "1年",
                        // 年化收益率
                        rateofyear: 5.8,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 20000,
                    }, {
                        // 名称
                        projectname: "航空小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 6.0,
                        //投资金额
                        investmentmoney: 30,
                        // 总金额
                        money: 31000,
                    }, {
                        // 名称
                        projectname: "成语小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    }, {
                        // 名称
                        projectname: "成语小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    }, {
                        // 名称
                        projectname: "航空小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 6.0,
                        //投资金额
                        investmentmoney: 30,
                        // 总金额
                        money: 31000,
                    }, {
                        // 名称
                        projectname: "成语小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    }, {
                        // 名称
                        projectname: "成语小镇",
                        //年限
                        investmentage: "2年",
                        // 年化收益率
                        rateofyear: 5.6,
                        //投资金额
                        investmentmoney: 100,
                        // 总金额
                        money: 50000,
                    }
                ],
                bulletin: [{
                    projectName: "义乌市再生资源利用中心",
                    bidding: "公开招标",
                    purchaser: "王立东",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容1",
                }, {
                    projectName: "月柿小镇",
                    bidding: "公开招标",
                    purchaser: "李美华",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容2",
                }, {
                    projectName: "航空小镇",
                    bidding: "公开招标",
                    purchaser: "李美华",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容3",
                }, {
                    projectName: "成语小镇",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容4",
                }, {
                    projectName: "德信资本",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容5",
                }, {
                    projectName: "泰发基金",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容6",
                }, {
                    projectName: "泰发基金",
                    bidding: "公开招标",
                    purchaser: "巴安水务",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容7",
                }, {
                    projectName: "义乌市再生资源利用中心",
                    bidding: "公开招标",
                    purchaser: "王立东",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容1",
                }, {
                    projectName: "月柿小镇",
                    bidding: "公开招标",
                    purchaser: "李美华",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容2",
                }, {
                    projectName: "航空小镇",
                    bidding: "公开招标",
                    purchaser: "李美华",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容3",
                }, {
                    projectName: "成语小镇",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容4",
                }, {
                    projectName: "德信资本",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容5",
                }, {
                    projectName: "泰发基金",
                    bidding: "公开招标",
                    purchaser: "曹微微",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容6",
                }, {
                    projectName: "泰发基金",
                    bidding: "公开招标",
                    purchaser: "巴安水务",
                    endtime: "2017-09-19 08:12:30",
                    place: "浙江义务",
                    keyword: "再生资源",
                    content: "内容7",
                }, ],
                comsumptionlist: [{
                        projectname: "义乌市再生资源利用中心",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    },
                    {
                        projectname: "月柿小镇",
                        consumption: "17451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "航空小镇",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "成语小镇",
                        consumption: "37151万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "盛世神州基金",
                        consumption: "37251万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "北京中俊投资有限公司",
                        consumption: "37351万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "德信资本",
                        consumption: "37441万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "泰发基金",
                        consumption: "37431万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "中国投资咨询",
                        consumption: "37421万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "英风环境公司",
                        consumption: "37411万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "巴安水物",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "义乌市再生资源利用中心",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "义乌市再生资源利用中心",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }, {
                        projectname: "义乌市再生资源利用中心",
                        consumption: "37451万元",
                        consumptionfunc: "财政性贷款",
                        moneypurpose: "文化设施建设",
                        moneybus: "自然资源管理局",
                    }
                ]

            },
            mutations: {
                changecomsumption(state, data) {
                    state.comsumptionlist[(data.page - 1) * 12 + data.num].projectname = data.storevalue;
                },


                changeprofitlist(state, data) {
                    /**
                     * 项目收益分析滑快修改store数据,前端数据不是用的这个。这里只用作后台记录
                     */
                    let _index = (data.page - 1) * 12 + data.data.$index;
                    console.log(state.profitlist[_index].lastmoney);
                    state.profitlist[_index].lastmoney = state.profitlist[_index].money / 100 * (100 - state.profitlist[_index].investmentmoney);
                },
                addstr(state) {
                    /**
                     * 项目收益分析计算初始lastmoney
                     */
                    state.profitlist.map((v) => {
                        v.lastmoney = v.money / 100 * (100 - v.investmentmoney);
                    })
                },
                setDataEnterprise(state, message) {
                    /**
                     * 修改名称的函数 
                     * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
                     *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
                     *         ps：12是我一页有多少数据
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.settledEnterprise[num].projectname = message.storevalue;
                },
                setinvestment(state, message) {
                    /**
                     * 修改名称的函数 
                     * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
                     *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
                     *         ps：12是我一页有多少数据
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.investment[num].investmentname = message.storevalue;
                },
                setinvesProfitlist(state, message) {
                    /**
                     * 修改名称的函数 
                     * 已经优化，针对问题：之前的函数在翻页之后默认传进来的index是在当前页的index
                     *          解决方法：现在的函数传入了页数，使用（page-1*12）+index就是当前的正确id 
                     *         ps：12是我一页有多少数据
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.profitlist[num].projectname = message.storevalue;
                },

                deleteDataEnterprise(state, message) {
                    /**
                      删除一行表格的函数
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.settledEnterprise = state.settledEnterprise.filter((_, index) => {

                        if (index == num) {
                            return false
                        }
                        return true;
                    })
                },
                deleteDatainvestment(state, message) {
                    /**
                      删除一行表格的函数
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.investment = state.investment.filter((_, index) => {

                        if (index == num) {
                            return false
                        }
                        return true;
                    })
                },
                deleteDataProfitlist(state, message) {
                    /**
                      删除一行表格的函数
                     */
                    let num = (message.page - 1) * 12 + message.num
                    state.profitlist = state.profitlist.filter((_, index) => {

                        if (index == num) {
                            return false
                        }
                        return true;
                    })
                },



                showdetail(state, dataOBJ) {

                    // console.log(index);
                    if (dataOBJ.message != undefined) {
                        let index = (dataOBJ.page - 1) * 12 + dataOBJ.message;
                        state.projectname = state.settledEnterprise[index].projectname;
                        state.projecttype = state.settledEnterprise[index].projecttype;
                        state.field = state.settledEnterprise[index].field;
                        state.addstitle = state.settledEnterprise[index].addstitle;
                        state.arc = state.settledEnterprise[index].arc;
                        state.year = state.settledEnterprise[index].year;
                        state.estimate = state.settledEnterprise[index].estimate;
                        state.isstore = state.settledEnterprise[index].isstore;
                        state.content = state.settledEnterprise[index].content;
                        state.addssubtitle = state.settledEnterprise[index].addssubtitle;
                        state.creattime = state.settledEnterprise[index].creattime;
                    }
                    state.block = !state.block

                },
                showinvestment(state, dataOBJ) {

                    // console.log(index);
                    if (dataOBJ.message != undefined) {
                        let index = (dataOBJ.page - 1) * 12 + dataOBJ.message;
                        state.investmentname = state.investment[index].investmentname;
                        state.investmentmoney = state.investment[index].investmentmoney;
                        state.investmentfunc = state.investment[index].investmentfunc;
                        state.projectstaic = state.investment[index].projectstaic;
                        state.projectsay = state.investment[index].projectsay;

                    }
                    state.block = !state.block

                }
            }
        },
        town: {
            state: {
                casebar: [{
                        num: "170265",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170266",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170267",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170268",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170269",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170260",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170261",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170262",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170263",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170264",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                    {
                        num: "170254",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170251",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170231",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170232",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170233",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170276",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "170277",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "171264",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    }, {
                        num: "160264",
                        projectFrom: "巡查上报",
                        bigName: "市容环境",
                        smallName: "垃圾暴漏",
                        addresdesc: "五道口成府路",
                        projectdesc: "垃圾堆放过多",
                    },
                ]
            }

        }
    },

})