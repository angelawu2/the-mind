import React, { createContext } from "react";
import io from "socket.io-client";
import jsonParser from "socket.io-json-parser";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    // const ENDPOINT = process.env.ENDPOINT;
    
    const socket = io({
        parser: jsonParser
    });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}


export {
    SocketContext,
    SocketProvider,
}
