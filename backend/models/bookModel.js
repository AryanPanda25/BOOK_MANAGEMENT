import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter The Book Name"],
        maxLength: [30, "Book Name cannot exceed 30 characters"],
        minLength: [2, "Book Name should have more than 2 characters"],
    },
    author: {
        type: String,
        required: [true, "Please Enter The Author Name"]
    },
    summary: {
        type: String,
        required: [true, "Please Enter the summary about the book"],
        minLength: [5, "Summary should be greater than 5 characters"]
    }
});

const Book = mongoose.model("Book", bookSchema);
export default Book;