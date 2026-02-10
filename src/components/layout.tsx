import type { Child, FC } from "hono/jsx";

export const Layout: FC<{ title: string, children: Child }> = ({ title, children }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <main>
          <nav>
            <ul>
              <li>
                <a href="/">Heim</a>
              </li>
              <li>
                <a href="/about">Um verkefnið</a>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
};
