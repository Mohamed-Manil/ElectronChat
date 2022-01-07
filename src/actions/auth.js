import * as api from "../api/auth.Js";
import {
  AUTH_REGISTER_SUCCESS,
  AUTH_ON_INIT,
  AUTH_ON_SUCCESS,
  AUTH_ON_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_INIT,
  AUTH_LOGIN_INIT,
} from "../types/authTypes";

export const registerUser = (formData) => async (dispatch) => {
  dispatch({ type: AUTH_REGISTER_INIT });
  const user = await api.register(formData);
  dispatch({ type: AUTH_REGISTER_SUCCESS });
  return user;
};

export const loginUser = (formData) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_INIT });
  await api.login(formData);
  dispatch({ type: AUTH_LOGIN_SUCCESS });
};

export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch({ type: AUTH_LOGOUT_SUCCESS });
};

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: AUTH_ON_INIT });
  return api.onAuthStateChanges((authUser) => {
    if (authUser) {
      dispatch({ type: AUTH_ON_SUCCESS, user: authUser });
    } else {
      dispatch({ type: AUTH_ON_ERROR });
      console.log("we are not authentificated");
    }
  });
};
