import * as api from "../api/chats";
import {
  CHAT_ROOMS_REQUEST,
  CHAT_ROOMS_SUCESS,
  CHAT_ROOMS_FAIL,
} from "../types/chatRoomTypes";

export const fetchChatRooms = () => async (dispatch) => {
  try {
    dispatch({ type: CHAT_ROOMS_REQUEST });
    const chatRooms = await api.fetchChats();
    dispatch({
      type: CHAT_ROOMS_SUCESS,
      chatRooms,
    });
  } catch (error) {
    dispatch({ type: CHAT_ROOMS_FAIL, error });
  }
};
