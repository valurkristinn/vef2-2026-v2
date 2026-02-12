import type { FC } from "hono/jsx";
import type { Todo } from "../types.js";

export const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <article>
      <h2>{todo.title}</h2>
      <div>
        <form method="post" action={`/update/${todo.id}`}>
          <input
            type="checkbox"
            id="f"
            name="finished"
            checked={todo.finished}
            onchange="this.form.submit()"
          >
            <label htmlFor="f">Lokið</label>
          </input>
          <input type="hidden" name="title" value={todo.title}></input>
        </form>
        <form method="post" action={`/delete/${todo.id}`}>
          <button>Eyða</button>
        </form>
      </div>
    </article>
  );
};
