import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { LOGGER } from "./util/logger";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) =>
  res.send("Express + TypeScript Server")
);
app.listen(PORT, () => {
  LOGGER.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
