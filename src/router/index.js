import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/pages/Login/Login' //登录页面
//地图主页页面

import mainmap from '@/mainMap/mainMap'

import realTimeMain from '@/pages/realTime/realTimeMain' //实时监控详情页面
import accountManagement from '@/pages/accountManagement/accountManagement' //账户管理
import alarmlist from '@/pages/alarmList/alarmlist'
import mapPages from '@/pages/mapPages/mapPages'
import operationManagement from '@/pages/operationManagement/operationManagement'
// import systemSetting from '@/pages/systemSetting/systemSetting'


//实时监控页面,//两个菜单.有单独配了一个不通的不布局
import realTimeDeal from '@/Energycompany/realTimeDeal'
import collect from '@/Energycompany/collect/collect'
import firecontrol from '@/Energycompany/firecontrol/firecontrol'
import Photovoltaic from '@/Energycompany/Photovoltaic/Photovoltaic'
import safeprotection from '@/Energycompany/safeprotection/safeprotection'
import storedenery from '@/Energycompany/storedenery/storedenery'
import chargestation from '@/Energycompany/chargingstation/chargingstation'
Vue.use(Router)
import systemSetting from './systemSetting.js'
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
          path: '/realTimeMain',
          name: '实时监控',
          component: realTimeMain
        },

        {
          path: '/accountManagement',
          name: '账户管理',
          component: accountManagement,
        },
        {
          path: '/alarmlist',
          name: '报警列表',
          component: alarmlist,
        },
        {
          path: '/mapPages',
          name: '地图首页',
          component: mapPages,
        },
        {
          path: '/operationManagement',
          name: '运维管理',
          component: operationManagement,
        },

        {
          path: '/',
          name: '/',
          component: () =>
            import('@/components/operation-management'),
          children: [{
            path: 'taskManagement',
            name: 'TaskManagement',
            component: () =>
              import('@/components/operation-management/task-management')
          }, {
            path: 'workOrderManagement',
            name: 'workOrderManagement',
            component: () =>
              import('@/components/operation-management/work-order-management')
          }, {
            path: 'inspectionPlan',
            name: 'InspectionPlan',
            component: () =>
              import('@/components/operation-management/inspection-plan')
          }]
        },





        {
          ...systemSetting
        }



      ]
    },
    {
      path: '/',
      name: '实时监控页面详情',
      component: realTimeDeal,
      children: [{
          path: '/collect/:id',
          name: "能源汇总",
          component: collect
        },
        {
          path: '/firecontrol/:id/:subid',
          name: "消防",
          component: firecontrol
        },
        {
          path: '/Photovoltaic/:id/:subid',
          name: "光伏",
          component: Photovoltaic
        },
        {
          path: '/safeprotection/:id/:subid',
          name: "安防",
          component: safeprotection
        },
        {
          path: '/storedenery/:id/:subid',
          name: "储能",
          component: storedenery
        },
        {
          path: '/chargestation/:id/:subid',
          name: '充电站',
          component: chargestation
        }

      ]
    },
    {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/mainmap',
      name: '地图主页',
      component: mainmap
    }



  ]
})
