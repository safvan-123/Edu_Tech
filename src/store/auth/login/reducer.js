import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_USER,
  COUNT,
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  user: [],
  registerError: {},
}
const inicount={
  count:0,
}

const login = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: ""
      }

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        registerError: ""
      }

    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
        loading: false,

      }
  }
  return state
}

export const Inc = (state = inicount, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case COUNT:
      return {
        ...state,
        count:state.count+1
      }
  }
  return state
}
export default login
