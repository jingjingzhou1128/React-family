import {asyncComponent} from '@/utils/asyncComponent'

const ROLES = {
  admin: 1,
  tourist: 2
}

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
    // component: import('@/pages/dashboard')
    component: asyncComponent(() => import('@/pages/dashboard'))
  },
  {
    path: '/home/permission',
    isExact: true,
    meta: {
      icon: 'icon-shezhi',
      title: 'permission'
    },
    children: [
      {
        path: '/home/permission/admin',
        meta: {
          title: 'admin',
          roleKey: [ROLES.admin]
        },
        component: asyncComponent(() => import('@/pages/permission/admin'))
      },
      {
        path: '/home/permission/tourist',
        meta: {
          title: 'tourist',
          roleKey: [ROLES.admin, ROLES.tourist]
        },
        component: asyncComponent(() => import('@/pages/permission/tourist'))
      }
    ]
  },

  // {
  //   path: '/home/nest',
  //   meta: {
  //     icon: 'icon-zhuti',
  //     title: 'nest'
  //   },
  //   children: [
  //     {
  //       path: '/home/nest/menu1',
  //       meta: {
  //         title: 'menu1'
  //       },
  //       component: asyncComponent(() => import('@/pages/nest/menu1'))
  //     },
  //     {
  //       path: '/home/nest/menu2',
  //       meta: {
  //         title: 'menu2',
  //         nonTag: true
  //       },
  //       component: asyncComponent(() => import('@/pages/nest/menu2'))
  //     }
  //   ]
  // },

  {
    path: '/home/ui',
    meta: {
      icon: 'icon-zhuti',
      title: 'ui'
    },
    children: [
      {
        path: '/home/ui/button',
        meta: {
          title: 'button'
        },
        component: asyncComponent(() => import('@/pages/ui/button'))
      },
      {
        path: '/home/ui/typography',
        meta: {
          title: 'typography'
        },
        component: asyncComponent(() => import('@/pages/ui/typography'))
      }
    ]
  },
  {
    path: '/home/layout',
    meta: {
      icon: 'icon-zhuti',
      title: 'layout'
    },
    children: [
      {
        path: '/home/layout/grid',
        meta: {
          title: 'grid'
        },
        component: asyncComponent(() => import('@/pages/layout/grid'))
      }
    ]
  }
]

export default contentRouterMap
