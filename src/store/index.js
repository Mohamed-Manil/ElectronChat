import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import chatRoomsReducer from "../reducers/chats";
import authReducer from "../reducers/auth";

export default function configureStore() {
  const middlewares = [thunk];
  const store = createStore(
    combineReducers({ chatRooms: chatRoomsReducer, auth: authReducer }),
    applyMiddleware(...middlewares)
  );
  return store;
}
