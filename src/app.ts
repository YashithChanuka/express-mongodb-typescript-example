import { json, urlencoded } from "body-parser";
import express from "express";
import toDoRoutes from "./routes/ToDo";
import db from "mongoose";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/todos", toDoRoutes);

app.use((err: Error, req: express.Request, res: express.Response) => {
  res.status(500).json({ message: err.message });
});

// creating db connection
db.connect("mongodb://localhost:27017/todos");

app.listen(3000);
