import type { FC } from "hono/jsx";

export const Nav: FC = () => {
  return (
    <nav>
      <a href="/">Home</a>

      <form method="post" action="/add">
        <input type="text"> </input>
        <button>Bæta við </button>
      </form>

    </nav>
  );
};
