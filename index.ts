import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

// deno-lint-ignore no-explicit-any
app.use(async (context: any, next: any) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

await app.listen({ port: 8000 });
console.log("Server started on http://localhost:8000");
