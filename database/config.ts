import { createPool } from 'mysql2/promise';

const CONFIG = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'book_seeker_DB'
};

export const connection = createPool(CONFIG);