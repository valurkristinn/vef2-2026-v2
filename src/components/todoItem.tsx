import type { FC } from "hono/jsx";
import type { Todo } from "../types.js";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <article>
      <form method="post" action={`/update/${todo.id}`}>
        <h2>{todo.title}</h2>
        <input
          type="checkbox"
          id="f"
          name="finished"
          checked={todo.finished}
          onchange="this.form.submit()"
        >
          <label htmlFor="f">Finished</label>
        </input>
        <input type="hidden" name="title" value={todo.title}></input>
      </form>
      <form method="post" action={`/delete/${todo.id}`}>
        <button>Eyða</button>
      </form>
    </article>
  );
};
