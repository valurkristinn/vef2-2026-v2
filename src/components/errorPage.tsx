import type { Child, FC } from "hono/jsx";

export const ErrorPage: FC<{ children?: Child}> = ({ children }) => {
  return (
    <main class="error">
      <h1 >Villa kom upp!</h1>
      {children}
    </main>
  );
};
