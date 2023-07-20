import { handler } from "./pkg/handler.js";
import { Application, Router } from "https://deno.land/x/oak@v12.6.0/mod.ts"

const app = new Application();
const router = new Router();

// @ts-ignore: parseInt accepts numbers, but the type claims it only supports strings
const port = parseInt(Deno.env.get("PORT") || 3000)


app.addEventListener('listen', () => {
  console.log("Griddle Server started")
  console.log(`%chttp://localhost:${port}/`, "color: blue")
})

app.use(router.routes());
app.use(router.allowedMethods());
app.use(handler);

app.listen({
  hostname: '0.0.0.0',
  port
});