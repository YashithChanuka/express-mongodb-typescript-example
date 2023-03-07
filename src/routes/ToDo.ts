import { Router } from "express";
import {
  createToDo,
  deleteToDo,
  getAllToDos,
  updateToDo,
} from "../Controller/ToDoController";

const router = Router();

router.post("/", createToDo);

router.get("/", getAllToDos);

router.put("/:id", updateToDo);

router.delete("/:id", deleteToDo);

export default router;
