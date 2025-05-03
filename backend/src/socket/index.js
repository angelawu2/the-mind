import { Server } from "socket.io"
import jsonParser from "socket.io-json-parser";

import { HOST, CLIENT_PORT } from "../constants.js";

const originUrl = HOST + ":" + CLIENT_PORT;

// websocket server
const startSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    parser: jsonParser,
    cors: {
      origin: originUrl,
    }
  });
  const roomName = "roomiie"
  io.on('connection', (socket) => {
    // add logging for which connection
    console.log('Client connected');

    socket.on('createRoom', () => {
      socket.join(roomName);
      io.to(roomName).emit("message", "Created room and connected to room");
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    })
  })
}

export {
  startSocketServer,
};
