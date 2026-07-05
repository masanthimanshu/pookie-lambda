import { logger } from "#core/runtime_logs.js";
import { writeData } from "#core/dynamo_client.js";

export const writeController = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */

  async writeData(req, res) {
    logger.info("Received write request", { device: req.body.device });

    try {
      const { id } = await writeData(req.body);
      logger.info("Successfully processed write request", { id });
      return res.send({ id });
    } catch (error) {
      logger.error("Error processing write request", { error: error.message });
      return res.status(400).send({ error: error.message });
    }
  },
};
