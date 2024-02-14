import { Router } from "express";
import BookController from "../controllers/BookController";

const BookRouter = Router();

BookRouter.route("/").get(BookController.getAllBooks);
BookRouter.route("/:id").get(BookController.getBook);
BookRouter.route("/").post(BookController.addBook);
BookRouter.route("/:id").put(BookController.updateBook);
BookRouter.route("/:id").delete(BookController.deleteBook);

export default BookRouter;