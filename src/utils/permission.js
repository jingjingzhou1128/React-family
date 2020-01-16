import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {ROLES} from '@/utils/common'

export function PrivateRoute({component: C, ...rest}) {
  const userRole = localStorage.getItem('roleKey') || ''
  const {roleKey} = rest.meta || {}
  if (!roleKey) return (
    <Route {...rest} component={C}/>
  )
  let hasPermis = roleKey.findIndex(item => item.toString() === userRole.toString()) >= 0
  return (
    hasPermis ? <Route {...rest} component={C}/> : <Redirect to="/403"/>
  )
}

export function getPermissionMenu (menus) {
  const roles = localStorage.getItem('roleKey')
  let filterMenus = []
  for (let index in menus) {
    if (menus[index].meta && menus[index].meta.roleKey && menus[index].meta.roleKey.indexOf(Number(roles)) < 0) {
      continue
    }
    if (menus[index].children) {
      filterMenus.push({
        ...menus[index],
        children: getPermissionMenu(menus[index].children)
      })
    } else {
      filterMenus.push(menus[index])
    }
  }
  return filterMenus
}

export function getIsLogin () {
  const isLogin = localStorage.getItem('isLogin')
  const username = localStorage.getItem('username')
  if (isLogin) {
    localStorage.setItem('roleKey', username === 'admin' ? ROLES.admin : ROLES.tourist)
  } else {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('roleKey')
  }
}
