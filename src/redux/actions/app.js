export const TOGGLE_SIDEBAR = 'app/TOGGLE_SIDEBAR';
export const OPEN_SIDEBAR = 'app/OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'app/CLODE_SIDEBAR';

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