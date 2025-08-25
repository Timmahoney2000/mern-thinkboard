import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
  reorderNotes,
} from "../controllers/notesController.js";

const router = express.Router();

router.patch("/reorder", reorderNotes); // Remove the duplicate line

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;