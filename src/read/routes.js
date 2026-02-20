import { Router } from "express";

const routes = Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Read dynamo route is working!!" });
});

export default routes;
