import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Inc from "./auth/login/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Inc,
})

export default rootReducer
