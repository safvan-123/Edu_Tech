import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, } from "./actionTypes"
import {
  loginError,
  loginSuccess,
  registerUserSuccess,
  registerUserError
} from "./actions"

import { post } from "../../../api/index"

function loginApi(loginData) {
  return post(`/account/v1/login`, loginData)
}

function registerApi(loginData) {
  return post(`/account/v1/signup`, loginData)
}

function logoutApi(token) {
  // return post(`/auth/logout`, token)
}


function* loginUser({ payload }) {
  try {
    const response = yield call(loginApi, payload.loginData)
    if (response?.access) {
      localStorage.setItem("access", response.access)
      localStorage.setItem("refresh", response.refresh)
      payload.history.push("/dashboard")
      yield put(loginSuccess(response))
    }
    if (response?.detail) {
      yield put(loginError(response?.detail))
    }
  } catch (error) {
    yield put(loginError(error))
  }
}

function* registerUser({ payload }) {
  try {
    const response = yield call(registerApi, payload.loginData)

    if (response?.id) {
      payload.history.push("/login")
      yield put(registerUserSuccess(response))
    } else {
      yield put(registerUserError(response))
    }
  } catch (error) {
    yield put(registerUserError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    const token = localStorage.getItem("access")
    const response = yield call(logoutApi, token)
    console.log(response);
    localStorage.clear("access")
    localStorage.clear("refresh")
    history.push("/login")
  } catch (error) {
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(REGISTER_USER, registerUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
