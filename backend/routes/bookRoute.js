import express from "express";
import {
    addBook,
    bookDetails,
    deleteBook,
    showBooks,
    updateBookDetails
} from "../controllers/bookController.js";
const router = express.Router();

router.post("/book/new", addBook);
router.get("/books", showBooks);
router.get("/bookDetails/:id", bookDetails);
router.put("/book/update/:id", updateBookDetails);
router.delete("/book/:id", deleteBook);

export default router;