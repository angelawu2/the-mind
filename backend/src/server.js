import express from "express";
import { createServer } from "http";
import cors from "cors";

import { PORT } from "./constants.js";
import { mountRoutes } from "./routes/index.js";
import { startSocketServer } from "./socket/index.js";


const app = express();
app.use(cors());
const httpServer = createServer(app);

// add WS server and listeners
startSocketServer(httpServer);

// add sub routers
mountRoutes(app);

httpServer.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
