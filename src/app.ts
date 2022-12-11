import express, { Express } from "express";
import morgan from "morgan";
import compression from "compression";
import * as dotenv from "dotenv";
import { routes } from "./routes/index";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(compression());
app.use("/", routes);
app.use(require("express-status-monitor")());

app.listen(PORT, () => {
  console.log(`Application is live and listening on port ${PORT}`);
});
