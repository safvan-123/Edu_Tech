import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_USER
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  user: [],
  registerError: {}
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

export default login
