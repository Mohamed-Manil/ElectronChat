import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import chatRoomsReducer from "../reducers/chats";

export default function configureStore() {
  const middlewares = [thunk];
  const store = createStore(
    combineReducers({ chatRooms: chatRoomsReducer }),
    applyMiddleware(...middlewares)
  );
  return store;
}
