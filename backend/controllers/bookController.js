import ErrorHandler from "../utils/errorhandler.js";
import Book from "../models/bookModel.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ApiFeatures from "../utils/apifeatures.js";

/*  ADD A NEW BOOK  */
export const addBook = catchAsyncError(async (req, res) => {

    const { name, author, summary } = req.body;
    const newBook = new Book({
        name,
        author,
        summary
    });
    const createdBook = await newBook.save();
    res.status(201).json({ success: true, createdBook });

});

/*  SHOW LIST OF ALL BOOKS  */
export const showBooks = catchAsyncError(async (req, res) => {

    const resultPerPage = 5;
    const apiFeature = new ApiFeatures(Book.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const allBooks = await apiFeature.query;
    res.status(200).json({ success: true, allBooks });

})

/*  SHOW DETAILS OF A SPECIFIC BOOK  */
export const bookDetails = catchAsyncError(async (req, res, next) => {

    const book = await Book.findById(req.params.id);
    if (!book) {
        return next(new ErrorHandler(`Book does not exist with Id: ${req.params.id}`, 400));
    }

    res.status(200).json({
        success: true,
        book
    });

})

/*  UPDATE THE BOOK DETAILS  */
export const updateBookDetails = catchAsyncError(async (req, res, next) => {

    const book = await Book.findById(req.params.id);
    if (!book) {
        return next(new ErrorHandler(`Book does not exist with Id: ${req.params.id}`, 400));
    }
    const newBookDetails = {
        name: req.body.name,
        author: req.body.author,
        summary: req.body.summary
    };
    await Book.findByIdAndUpdate(req.params.id, newBookDetails, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });

})

/*  DELETE THE BOOK  */
export const deleteBook = catchAsyncError(async (req, res, next) => {

    const book = await Book.findById(req.params.id);
    if (!book) {
        return next(new ErrorHandler(`Book does not exist with Id: ${req.params.id}`, 400));
    }
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "Book Deleted Successfully",
    });

})