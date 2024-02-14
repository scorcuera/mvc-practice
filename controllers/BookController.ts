import { Request, Response } from 'express';
import BookModel from '../models/mysql/BookModel';
// import BookModel from '../models/mongodb/BookModel';

const BookController = {
    getAllBooks: async (req: Request, res: Response) => {
        try {
            const books = await BookModel.getAllBooks();
            res.json(books);
        } catch (error) {
            console.log(error)
        }
    },
    getBook: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const book = await BookModel.getBook(id);
            if (!Array.isArray(book) || book.length === 0) {
                res.status(404).json({ message: `Book with id ${id} not found` });
                return;
            }
            res.json(book);
        } catch (error) {
            console.log(error)
        }
    },
    addBook: async (req: Request, res: Response) => {
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            res.status(400).json({ message: 'Please provide title, author and year' });
            return;
        }
        await BookModel.createBook(title, author, year);

    },
    updateBook: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { title, author, year } = req.body;
        if (!title || !author || !year) {
            res.status(400).json({ message: 'Please provide title, author and year' });
            return;
        }
        await BookModel.updateBook(id, title, author, year);

    },
    deleteBook: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await BookModel.deleteBook(id);
        } catch (error) {
            console.log(error)
        }
    },
};

export default BookController;
