import { app } from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, env.HOST, () => {
  console.log(
    `Server is running in ${env.NODE_ENV} mode at http://localhost:${env.PORT}`,
  );
});