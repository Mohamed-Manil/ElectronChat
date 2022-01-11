import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import chatRoomsReducer from "../reducers/chats";
import authReducer from "../reducers/auth";
import AppReducer from "../reducers/app";

import AppMiddleware from "./middlewares/app";

export default function configureStore() {
  const middlewares = [thunk, AppMiddleware];
  const store = createStore(
    combineReducers({
      chatRooms: chatRoomsReducer,
      auth: authReducer,
      app: AppReducer,
    }),
    applyMiddleware(...middlewares)
  );
  return store;
}
