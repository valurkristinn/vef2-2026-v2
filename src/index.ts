import { serve } from '@hono/node-server';
import { app } from './main.js';

const port = Number(process.env.PORT);

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
