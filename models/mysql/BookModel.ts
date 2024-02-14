import { connection } from "../../database/config";

const BookModel = {
    getAllBooks: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM books');
        return result;
    },
    getBook: async (id: string) => {
        const [result, metadata] = await connection.query(`SELECT * FROM books WHERE id = ${id}`);
        return result;
    },
    createBook: async (title: string, author: string, year: number) => {
        const [result, metadata] = await connection.query(`INSERT INTO books (title, author, year) VALUES ('${title}', '${author}', ${year})`);
        return result;
    },
    updateBook: async (id: string, title: string, author: string, year: number) => {
        const [result, metadata] = await connection.query(`UPDATE books SET title = '${title}', author = '${author}', year = ${year} WHERE id = ${id}`);
        return result;
    },
    deleteBook: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM books WHERE id = ${id}`);
        return result;
    },

}

export default BookModel;
