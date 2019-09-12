import {TOGGLE_SIDEBAR, OPEN_SIDEBAR, CLOSE_SIDEBAR} from '../actions/app';

/**
 * init state
 */
const initState = {
  collapsed: sessionStorage.getItem('collapsed') ? !!+sessionStorage.getItem('collapsed') : false // shrink: 1/true, opened: 0/false;
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
    default:
      return state
  }
}