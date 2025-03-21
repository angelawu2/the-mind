import express from "express";
import { createServer } from "http";
import { Server } from "socket.io"
import cors from "cors";
import jsonParser from "socket.io-json-parser";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
const httpServer = createServer(app);

// websocker server
const io = new Server(httpServer, {
    parser: jsonParser,
});

io.on('connection', (socket) => {
    // add logging for which connection
    console.log('Client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
})

app.get('/', (_, res) => {
    res.send("Server is up and running");
})

httpServer.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})
