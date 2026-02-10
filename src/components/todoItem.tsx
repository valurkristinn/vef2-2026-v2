import type { FC } from "hono/jsx";
import type { Todo } from "../types.js";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <article>
      <h2>{todo.title}</h2>
      <input type="checkbox" name="finished" checked={todo.finished}>
        Finished
      </input>
    </article>
  );
};
