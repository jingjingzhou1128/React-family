export const TOGGLE_SIDEBAR = 'app/TOGGLE_SIDEBAR'
export const OPEN_SIDEBAR = 'app/OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'app/CLODE_SIDEBAR'
export const SET_THEME = 'app/SET_THEME'
// export const SET_LANG = 'app/SET_LANG'
export const SET_DEVICE = 'app/SET_DEVICE'
export const SET_DASSET = 'app/SET_DASSET'

export function toggleSidebar () {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function openSidebar () {
  return {
    type: OPEN_SIDEBAR
  }
}

export function closeSidebar () {
  return {
    type: CLOSE_SIDEBAR
  }
}

export function setTheme (theme) {
  return {
    type: SET_THEME,
    theme
  }
}

// export function setLang (lang) {
//   return {
//     type: SET_LANG,
//     lang
//   }
// }

export function setDevice (device) {
  return {
    type: SET_DEVICE,
    device
  }
}

export function setDasSet (das) {
  return {
    type: SET_DASSET,
    das
  }
}