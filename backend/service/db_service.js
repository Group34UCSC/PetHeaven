const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // database: "abc_school",
    database: "petheaven",
});

conn.connect();

module.exports = conn;