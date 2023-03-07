import { RequestHandler } from "express";
import ToDo, { ToDoModel } from "../models/ToDo";

// create function
export const createToDo: RequestHandler = async (req, res) => {
  try {
    const data: ToDoModel = req.body;
    let toDos = await ToDo.create(data);
    return res
      .status(200)
      .json({ message: "ToDo created successfully.!", data: toDos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// get-all function
export const getAllToDos: RequestHandler = async (req, res) => {
  try {
    let toDos = await ToDo.find({});
    return res.status(200).json({ message: "All ToDos.!", data: toDos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// update function
export const updateToDo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    let toDos = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "ToDo updated successfully.!", data: toDos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// delete function
export const deleteToDo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    let isDeleted = await ToDo.findByIdAndDelete(id);
    if (!isDeleted) {
      throw new Error("Failed to delete todo");
    }
    return res.status(200).json({ message: "ToDo deleted successfully.!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
