import {TOGGLE_SIDEBAR, OPEN_SIDEBAR, CLOSE_SIDEBAR, SET_THEME, SET_DEVICE, SET_DASSET} from '../actions/app';

// SET_LANG,
/**
 * init state
 */
const initState = {
  language: sessionStorage.getItem('language') || 'zh-CN',
  theme: sessionStorage.getItem('theme') || 'default',
  device: 'desktop',
  collapsed: sessionStorage.getItem('collapsed') ? !!+sessionStorage.getItem('collapsed') : false, // shrink: 1/true, opened: 0/false;
  dasSet: sessionStorage.getItem('dasSet') || ''
}

/**
 * reducer
 */
export default function reducer (state = initState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      sessionStorage.setItem('collapsed', !state.collapsed ? 1 : 0)
      return {
        ...state,
        collapsed: !state.collapsed
      }
    case OPEN_SIDEBAR:
      sessionStorage.setItem('collapsed', 0)
      return {
        ...state,
        collapsed: false
      }
    case CLOSE_SIDEBAR:
      sessionStorage.setItem('collapsed', 1)
      return {
        ...state,
        collapsed: true
      }
    case SET_THEME:
      sessionStorage.setItem('theme', action.theme)
      return {
        ...state,
        theme: action.theme
      }
    // case SET_LANG:
    //   sessionStorage.setItem('language', action.lang)
    //   return {
    //     ...state,
    //     language: action.lang
    //   }
    case SET_DEVICE:
      return {
        ...state,
        device: action.device
      }
    case SET_DASSET:
      sessionStorage.setItem('dasSet', action.das)
      return {
        ...state,
        dasSet: action.das
      }
    default:
      return state
  }
}