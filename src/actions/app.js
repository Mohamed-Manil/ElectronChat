import { APP_IS_ONLINE, APP_IS_OFFLINE } from "../types/appTypes";

const onStatusChange = (dispatch) => () => {
  const isOnline = navigator.onLine;
  const action = isOnline
    ? { type: APP_IS_ONLINE, isOnline }
    : { type: APP_IS_OFFLINE, isOnline };

  dispatch(action);
};

export const listentToConnection = () => (dispatch) => {
  const connectionHandler = onStatusChange(dispatch);

  window.addEventListener("online", connectionHandler);
  window.addEventListener("offline", connectionHandler);

  return () => {
    window.removeEventListener("online", connectionHandler);
    window.removeEventListener("offline", connectionHandler);
  };
};
