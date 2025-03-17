import { createServer } from "http";
import next from "next";
import { parse } from "url"
import { Server } from "socket.io"

// enabling WebSocket connections alongside next HTTP requests

const PORT = 3000

// next server  
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();


app.prepare().then(() => {
    // http server
    const server = createServer((req, res) => {
        handle(req, res, parse(req.url, true));
    });

    const io = new Server(server);

    io.on('connection', socket => {
        // add logging for which connection
        console.log('Client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        })
    })

    // pass host from somewhere
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log('Server ready on port ' + PORT);
    })
})
