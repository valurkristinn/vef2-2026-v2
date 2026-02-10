import type { FC } from "hono/jsx";

import type { Todo } from "../types.js";
import { TodoList } from "./todoList.js";

type TodoPageProps = {
  todos?: Todo[];
};

export const TodoPage: FC<TodoPageProps> = ({ todos = [] }) => {
  return (
    <section>
      <form method="post" action="/add">
        <input type="text" name="title"></input>
        <button>Bæta við </button>
      </form>
      <TodoList title="todos" todos={todos} />
    </section>
  );
};
