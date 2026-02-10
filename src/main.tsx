import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { TodoPage } from "./components/TodoPage.js";
import { init, listTodos, createTodo } from "./lib/db.js";
import { Layout } from "./components/layout.js";
import { todoSchema } from "./lib/validation.js";
import { z } from "zod";
import { ErrorPage } from "./components/errorPage.js";

// búum til og exportum Hono app
export const app = new Hono();

// sendir út allt sem er í static möppunni
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  init();
  const todos = await listTodos();

  if (!todos) {
    return;
  }

  const html = (
    <Layout title="Todo">
      <TodoPage todos={todos} />
    </Layout>
  );
  return c.html(html);
});

app.post("/add", async (c) => {
  const body = await c.req.parseBody();

  const result = todoSchema.safeParse(body);

  if (!result.success) {
    console.error(z.flattenError(result.error));
    return c.html(<ErrorPage><p>Ranglega formaður strengur</p></ErrorPage>);
  }
  createTodo(result.data.title);

  return c.text("móttekið!");
});
