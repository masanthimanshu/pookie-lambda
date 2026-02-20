import { z } from "zod";
import crypto from "node:crypto";
import db from "#core/dynamo_client.js";
import { logger } from "#core/logger.js";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export const writeController = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */

  async writeData(req, res) {
    logger.info("Received write request", { device: req.body.device });

    const schema = z.object({ device: z.string(), status: z.string() });

    try {
      const data = schema.strict().parse(req.body);
      const id = crypto.randomUUID();

      const params = {
        TableName: process.env.TABLE_NAME,
        Item: { id, ...data },
      };

      await db.send(new PutCommand(params));

      logger.info("Successfully processed write request", { id });
      return res.status(200).send({ id });
    } catch (error) {
      logger.error("Error processing write request", { error: error.message });
      return res.status(400).send({ error: error.message });
    }
  },
};
