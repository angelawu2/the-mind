import React, { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";

import { isValidRoomId } from "@the-mind-card-game/lib";
import { SocketContext } from "../contexts/socketContext";

const Room = () => {
  const { roomId } = useParams();

  const socket = useContext(SocketContext);
  const isConnected = useMemo(() => {
    return socket !== undefined && socket.connected;
  }, [socket]);
  console.log(isConnected);

  // connect socket to room
  useEffect(() => {
    
  }, [])

  return (
    <div>
      {isValidRoomId(roomId)}
    </div>
  );


  // if (isConnected) {
  //   return (
  //     <div>
  //       <h1>Connected to a lobby!</h1>
  //       <p>socket Id: {socket.id}</p>
  //       <p>username: </p>
  //       <p>room code: </p>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <h1>No connection :(</h1>
  //   </div>
  // );
};

export default Room;
