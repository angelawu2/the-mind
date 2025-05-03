import React, { createContext } from "react";
import io from "socket.io-client";
import jsonParser from "socket.io-json-parser";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const ENDPOINT = process.env.REACT_APP_SERVER_ENDPOINT;

  const socket = io(ENDPOINT, {
    parser: jsonParser,
    // transports: ['polling', 'websocket' ], // test CORS
    transports: ["websocket", "polling"],
  });

  socket.on("connect", () => {
    console.log(socket.id);
  });

  socket.on("message", (msg) => {
    console.log(msg);
  });

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
