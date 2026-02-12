import type { FC } from "hono/jsx";

import type { Todo } from "../types.js";
import { TodoList } from "./todoList.js";

type TodoPageProps = {
  todos?: Todo[];
};

export const TodoPage: FC<TodoPageProps> = ({ todos = [] }) => {
  const finished = todos.filter((i) => i.finished);
  const unfinished = todos.filter((i) => !i.finished);

  return (
    <section>
      <form method="post" action="/add">
        <input type="text" name="title"></input>
        <button>Bæta við </button>
      </form>
      {todos.length == 0 && <p>Engin todo fundust</p>}
      {finished.length > 0 && (
        <form method="post" action="/delete/finished">
          <button>Eyða loknum todos</button>
        </form>
      )}
      <TodoList title="Allur listinn" todos={todos} />
      <TodoList title="Ókláruð todo" todos={unfinished} />
      <TodoList title="Kláruð todo" todos={finished} />
    </section>
  );
};
