import { writeSchema } from "./schema.js";
import { logger } from "#core/runtime_logs.js";

/**
 * @param {import("zod").ZodObject} schema
 */

const validateData = (schema) => (req, res, next) => {
  try {
    schema.strict().parse(req.body);
    next();
  } catch (error) {
    logger.error("Data validation failed", { error: error.message });
    res.status(400).send({ error: error.message });
  }
};

export const validateWrite = validateData(writeSchema);
