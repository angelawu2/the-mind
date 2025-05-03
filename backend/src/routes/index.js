import roomsRouter from "./rooms.js";

const mountRoutes = (app) => {
  app.get('/', (_, res) => {
    res.send("Server is up and running");
  })

  app.use("/rooms", roomsRouter);
}

export {
  mountRoutes,
};
