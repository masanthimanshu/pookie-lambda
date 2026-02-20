import express from "express";
import routes from "./routes.js";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.use("/write", routes);

export const handler = serverless(app);
