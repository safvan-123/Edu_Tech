import {
  TOGGLE_LEFTMENU,
} from "./actionTypes"


export const toggleLeftmenu = isopen => ({
  type: TOGGLE_LEFTMENU,
  payload: isopen,
})
