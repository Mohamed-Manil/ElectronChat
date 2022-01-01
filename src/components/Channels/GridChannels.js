import Channel from "./Channel";
import ChannelLoading from "../loading/ChannelLoading";

import React, { useEffect } from "react";

import { fetchChatRooms } from "../../actions/chats";
import { useSelector, useDispatch } from "react-redux";

const GridChannels = () => {
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state.chatRooms);

  useEffect(() => {
    dispatch(fetchChatRooms());
  }, [dispatch]);
  return (
    <div className="grid-cols-gidRes grid gap-4 mx-3 justify-items-center">
      {loading ? (
        <>
          <ChannelLoading />
          <ChannelLoading />
          <ChannelLoading />
        </>
      ) : (
        <>
          {items.map((item) => (
            <Channel key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default GridChannels;
