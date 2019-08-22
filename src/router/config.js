import {asyncComponent} from '@/utils/asyncComponent'

const contentRouterMap = [
  {
    path: '/home/dashboard',
    // isExact: false,
    // isStrict: false,
    meta: {
      icon: '',
      title: 'Dashboard'
    },
    component: asyncComponent(() => import('@/pages/dashboard'))
  },
  {
    path: '/home/permission',
    meta: {
      icon: '',
      title: 'Permission'
    },
    component: asyncComponent(() => import('@/pages/permission'))
  },
  {
    path: '/home/nest',
    meta: {
      icon: '',
      title: 'Nest'
    },
    children: [
      {
        path: '/home/nest/menu1',
        meta: {
          title: 'Menu1'
        },
        component: asyncComponent(() => import('@/pages/nest/menu1'))
      },
      {
        path: '/home/nest/menu2',
        meta: {
          title: 'Menu2'
        },
        component: asyncComponent(() => import('@/pages/nest/menu2'))
      }
    ]
  }
];

export default contentRouterMap;
