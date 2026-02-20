import routes from "./routes.js";
import app from "#core/create_app.js";
import serverless from "serverless-http";

export const handler = serverless(app("/write", routes));
