import { APP_IS_OFFLINE, APP_IS_ONLINE } from "../../types/appTypes";
import notification from "../../utils/notification";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case APP_IS_ONLINE:
    case APP_IS_OFFLINE: {
      notification.show({
        title: "Connection Status",
        body: action.isOnline ? "Online" : "Offline",
      });
    }
  }
  next(action);
};
