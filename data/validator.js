import { z } from "zod";
import { logger } from "#core/runtime_logs.js";

const updateSchema = z.object({ id: z.string(), status: z.string() });
const writeSchema = z.object({ device: z.string(), status: z.string() });

/**
 * @param {import("zod").ZodObject} schema
 */

const validateData = (schema) => (req, res, next) => {
  try {
    schema.strict().parse(req.body);
    next();
  } catch (error) {
    logger.error("Data validation failed", { error: error.message });
    res.status(400).send({ error: "Missing required fields" });
  }
};

export const validateWrite = validateData(writeSchema);
export const validateUpdate = validateData(updateSchema);
