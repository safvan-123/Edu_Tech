import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_USER,
  COUNT,
} from "./actionTypes"

export const Increment = (count) => {
  return {
    type: COUNT,
    payload: count+1,
  }
}

export const loginUser = (loginData, history) => {
  return {
    type: LOGIN_USER,
    payload: { loginData, history },
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}


export const registerUser = (loginData, history) => {
  return {
    type: REGISTER_USER,
    payload: { loginData, history },
  }
}

export const registerUserSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  }
}

export const registerUserError = error => {
  return {
    type: REGISTER_ERROR,
    payload: error,
  }
}
export const countIncrement = count => {
  return {
    type: COUNT,
    payload: count+1 ,
  }
}
