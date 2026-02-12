import { Hono } from "hono";
import { z } from "zod";

import { serveStatic } from "@hono/node-server/serve-static";
import {
  init,
  listTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteFinishedTodos,
} from "./lib/db.js";
import { Layout } from "./components/layout.js";
import { todoSchema } from "./lib/validation.js";
import { TodoPage } from "./components/TodoPage.js";
import { OtherPage } from "./components/otherPage.js";

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

app.get("/about", async (c) => {
  const html = (
    <OtherPage>
      <h1>Um verkefnið</h1>
      <p>Þetta er verkefni 2 fyrir áfangann HBV403G Vefforritun 2</p>
    </OtherPage>
  );

  return c.html(html);
});

app.post("/add", async (c) => {
  const body = await c.req.parseBody();

  const result = todoSchema.safeParse({
    id: "0",
    title: body.title,
    finished: "on",
  });

  if (!result.success) {
    console.error(z.flattenError(result.error));
    return c.html(
      <OtherPage error="x">
        <h1>Villa kom upp!</h1>
        <p>Ranglega formaður strengur</p>
      </OtherPage>,
    );
  }
  createTodo(result.data.title);

  return c.html(
    <OtherPage>
      <h1>Móttekið!</h1>
    </OtherPage>,
  );
});

app.post("/update/:id", async (c) => {
  const body = await c.req.parseBody();
  const id = c.req.param("id");

  const todo = { id: id, title: body.title, finished: body.finished };

  const result = todoSchema.safeParse(todo);

  if (!result.success) {
    console.error(z.flattenError(result.error));
    return c.html(
      <OtherPage error="x">
        <h1>Villa kom upp!</h1>
        <p>Reyndu aftur síðar</p>
      </OtherPage>,
    );
  }

  await updateTodo(result.data.id, result.data.title, result.data.finished);

  return c.redirect("/");
});

app.post("/delete/finished", async (c) => {
  await deleteFinishedTodos();

  return c.redirect("/");
});

app.post("/delete/:id", async (c) => {
  const id = c.req.param("id");

  const todo = { id: id, title: "filler", finished: "on" };

  const result = todoSchema.safeParse(todo);

  if (!result.success) {
    console.error(z.flattenError(result.error));
    return c.html(
      <OtherPage error="x">
        <h1>Villa kom upp!</h1>
        <p>Reyndu aftur síðar</p>
      </OtherPage>,
    );
  }

  await deleteTodo(result.data.id);

  return c.redirect("/");
});

app.notFound((c) => {
  return c.html(
    <OtherPage error="x">
      <h1>404 Villa</h1>
      <p>Síða fannst ekki</p>
    </OtherPage>,
  );
});
