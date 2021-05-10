const mysql = require('mysql2');

require('dotenv').config();

// connect to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    });

module.exports = db;