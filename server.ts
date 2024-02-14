import express from 'express';
import { connection } from './database/config';
import BookRouter from './routes/BookRouter';

const app = express();
const port = 3000;

app.use("/books/", BookRouter);
// app.use("/users/", UserRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
