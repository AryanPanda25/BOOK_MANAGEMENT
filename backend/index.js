import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import bookRoute from "./routes/bookRoute.js"
import errorMiddleware from "./middleware/error.js"
const app = express();

/*   CONFIGURATION   */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: "./config/config.env" })
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: '*'}));

/*  ROUTES  */
app.use("/api/v1", bookRoute);

/*  MIDDLEWARE FOR ERROR HANDLING  */
app.use(errorMiddleware);

export default app;