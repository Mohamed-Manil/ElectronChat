import { combineReducers } from "redux";
import { createErrorReducer, createIsFetchingReducer } from "./common";
import {
  AUTH_ON_SUCCESS,
  AUTH_ON_ERROR,
  AUTH_ON_INIT,
} from "../types/authTypes";

const createLoginReducer = () =>
  combineReducers({
    error: createErrorReducer("AUTH_LOGIN"),
    isChecking: createIsFetchingReducer("AUTH_LOGIN"),
  });
const createRegisterReducer = () =>
  combineReducers({
    error: createErrorReducer("AUTH_REGISTER"),
    isChecking: createIsFetchingReducer("AUTH_REGISTER"),
  });

const createAuthReducer = () => {
  const user = (state = null, action) => {
    switch (action.type) {
      case AUTH_ON_INIT:
      case AUTH_ON_ERROR:
        return null;
      case "AUTH_REGISTER_SUCCESS":
      case "AUTH_LOGIN_SUCCESS":
      case AUTH_ON_SUCCESS:
        return action.user;
      default:
        return state;
    }
  };
  return combineReducers({
    user,
    isChecking: createIsFetchingReducer("AUTH_ON"),
    login: createLoginReducer(),
    register: createRegisterReducer(),
  });
};

export default createAuthReducer();
