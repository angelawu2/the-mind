import { Server } from "socket.io";


// endpoint to initialize socket connection
const SocketHandler = (_, res) => {
    if (res.socket.server.io) {
        console.log('Server is already running');
    } else {
        console.log('Server is starting');
        const io = new Server(res.socker.server);
        res.socket.server.io = io;

        io.on('connection', socket => {
            socket.on('input-change', msg => {
                socket.broadcast.emit('update-input', msg)
            });
        });
    }
    res.end();
}

export default SocketHandler;
