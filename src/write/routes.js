import { Router } from "express";
import { validateWrite } from "#data/validator.js";
import { writeController } from "./controller.js";

const routes = Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Write dynamo route is working!!" });
});

routes.post("/data", validateWrite, writeController.writeData);

export default routes;
