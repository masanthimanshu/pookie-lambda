import { Router } from "express";
import { readController } from "./controller.js";

const routes = Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Read dynamo route is working!!" });
});

routes.get("/data", readController.readData);

export default routes;
