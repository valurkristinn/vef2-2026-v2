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
      <div>
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
      </div>
      <TodoList title="Öll todo" todos={todos} />
      <TodoList title="Ólokin todo" todos={unfinished} />
      <TodoList title="Lokin todo" todos={finished} />
    </section>
  );
};
