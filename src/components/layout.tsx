import type { Child, FC } from "hono/jsx";

export const Layout: FC<{ title: string; children: Child }> = ({
  title,
  children,
}) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="./static/styles.css" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Sono:wght,MONO@200..800,1&display=swap');
        </style>
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
