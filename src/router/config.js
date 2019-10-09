import {asyncComponent} from '@/utils/asyncComponent'

const contentRouterMap = [
  {
    path: '/home/dashboard',
    // isExact: false,
    // isStrict: false,
    meta: {
      icon: 'icon-dashboard',
      title: 'dashboard',
      affixTag: true
    },
    component: asyncComponent(() => import('@/pages/dashboard'))
  },
  {
    path: '/home/permission',
    isExact: true,
    meta: {
      icon: 'icon-shezhi',
      title: 'permission'
    },
    component: asyncComponent(() => import('@/pages/permission'))
  },
  {
    path: '/home/nest',
    meta: {
      icon: 'icon-zhuti',
      title: 'nest'
    },
    children: [
      {
        path: '/home/nest/menu1',
        meta: {
          title: 'menu1'
        },
        component: asyncComponent(() => import('@/pages/nest/menu1'))
      },
      {
        path: '/home/nest/menu2',
        meta: {
          title: 'menu2',
          nonTag: true
        },
        component: asyncComponent(() => import('@/pages/nest/menu2'))
      }
    ]
  }
];

export default contentRouterMap;
