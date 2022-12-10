// @flow
import {
  TOGGLE_LEFTMENU,
} from "./actionTypes"

const INIT_STATE = {
  leftMenu: false,
}

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_LEFTMENU:
      return {
        ...state,
        leftMenu: action.payload,
      }
    default:
      return state
  }
}

export default Layout
