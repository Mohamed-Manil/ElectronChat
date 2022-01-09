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
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER_ERROR,
} from "../types/authTypes";

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REGISTER_INIT });
    const user = await api.register(formData);
    dispatch({ type: AUTH_REGISTER_SUCCESS, user });
  } catch (error) {
    dispatch({ type: AUTH_REGISTER_ERROR, error });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_LOGIN_INIT });
    const user = await api.login(formData);
    dispatch({ type: AUTH_LOGIN_SUCCESS, user });
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_ERROR, error });
  }
};

export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch({ type: AUTH_LOGOUT_SUCCESS });
};

export const listenToAuthChanges = () => (dispatch) => {
  dispatch({ type: AUTH_ON_INIT });
  return api.onAuthStateChanges(async (authUser) => {
    if (authUser) {
      const userProfile = await api.getUserProfile(authUser.uid);
      dispatch({ type: AUTH_ON_SUCCESS, user: userProfile });
    } else {
      dispatch({ type: AUTH_ON_ERROR });
    }
  });
};
