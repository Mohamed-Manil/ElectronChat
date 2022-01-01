import {
  CHAT_ROOMS_REQUEST,
  CHAT_ROOMS_SUCESS,
  CHAT_ROOMS_FAIL,
} from "../types/chatRoomTypes";

const DEFAULT_STATE = {
  items: [],
};

export default function chatRoomsReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHAT_ROOMS_REQUEST:
      return { items: [], loading: true };
    case CHAT_ROOMS_SUCESS:
      return { loading: false, items: action.chatRooms };
    case CHAT_ROOMS_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
}
