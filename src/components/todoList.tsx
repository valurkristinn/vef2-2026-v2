import type { FC } from "hono/jsx";

import type { Todo } from "../types.js";
import { TodoItem } from "./todoItem.js";

type TodoPageProps = {
  title: string,
  todos?: Todo[];
};

export const TodoList: FC<TodoPageProps> = ({ title, todos = [] }) => {
  return (
    <section>
      <h1>{title}</h1>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </section>
  );
};
