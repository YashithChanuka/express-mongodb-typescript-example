import * as mongoose from "mongoose";

type ToDoType = ToDoModel & mongoose.Document;

export interface ToDoModel {
  title: {
    type: String;
    required: true;
  };
  description: {
    type: String;
    required: true;
  };
}

const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ToDo: mongoose.Model<ToDoType> = mongoose.model<ToDoType>(
  "ToDo",
  ToDoSchema
);
export default ToDo;
