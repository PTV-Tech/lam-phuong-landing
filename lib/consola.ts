import { createConsola } from "consola";

const isLocal = process.env.NODE_ENV === "development";

export const logger = createConsola({
  level: isLocal ? 4 : 0,
});
