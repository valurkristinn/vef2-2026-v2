import { z } from "zod";

export const todoSchema = z.object({
  id: z.coerce.number(),
  title: z.string().trim().min(1).max(255),
  finished: z.coerce.boolean(),
});
