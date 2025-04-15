import express from "express";
import router from "./controllers/cryptoocurrency.controller";

const app = express();

app.use(express.json());
app.use("/api", router);

export default app;