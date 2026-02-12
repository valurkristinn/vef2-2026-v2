import type { Child, FC } from "hono/jsx";
import { Layout } from "./layout.js";

export const OtherPage: FC<{ error?: string; children?: Child }> = ({
  error,
  children,
}) => {
  const type = error ? "error" : "success";
  return (
    <Layout title={`${type}`}>
      <section class={`${type}`}>
        {children}
        <a href="/">Til baka</a>
      </section>
    </Layout>
  );
};
