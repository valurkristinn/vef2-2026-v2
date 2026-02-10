import { z } from 'zod';


export const todoSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  finished: z.coerce.boolean()
})
