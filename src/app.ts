import express from "express";
import router from "./controllers/cryptoocurrency.controller";

const app = express();

app.use(express.json());
app.use("/trades", router);

export default app;