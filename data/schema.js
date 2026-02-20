import { z } from "zod";

export const writeSchema = z.object({
  device: z.string(),
  status: z.string(),
});
