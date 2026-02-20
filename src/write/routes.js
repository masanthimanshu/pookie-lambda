import { Router } from "express";

const routes = Router();

routes.get("/health", (req, res) => {
  res.json({ status: "Write dynamo route is working!!" });
});

export default routes;
