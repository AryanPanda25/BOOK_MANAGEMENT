import app from "./index.js";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

/*  HANDLING UNCAUGHT EXCEPTION  */
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

/*  CONFIGURATION  */
dotenv.config({ path: "./config/config.env" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*  CONNECTING TO DATABASE  */
import("./db/database.js");

/*  SERVER  */
const port = process.env.PORT;
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

/*  UNHANDLED PROMISE REJECTION  */
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
