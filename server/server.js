import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";

import middlewares from "./src/middleware/Middlewares.js";
import Configuration from "./src/config/Configurations.js";

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route.routes(app)
app.get("/", (req, res) => {
  const text = fs.readFileSync("../server/input2.text");
  const inputData = text.toString("utf8");

  res.send({ inputData });
});
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

Configuration.connectToDatabase();
Configuration.connectoToPort(app);

export default app;
