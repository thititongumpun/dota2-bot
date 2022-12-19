import express, { Express } from "express";
import morgan from "morgan";
import compression from "compression";
import cors, { CorsOptions } from 'cors';
import * as dotenv from "dotenv";
import { routes } from "./routes/index";
import path from 'path';
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;
const options: CorsOptions = {
  origin: "*"
}
const dir = path.join(__dirname, 'public');
console.log(dir);

app.use(morgan("tiny"));
app.use(compression());
app.use(cors(options));
app.use("/", routes);
app.use(express.json());
app.use(express.static(dir));

app.listen(PORT, () => {
  console.log(`Application is live and listening on port ${PORT}`);
});
