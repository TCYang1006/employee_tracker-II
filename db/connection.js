const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        //host: 'localhost',
        socketPath: "/tmp/mysql.sock",
        // Your MySQL username,
        user: "root",
        // Your MySQL password
        password: "01ElletcYang!",
        database: "workforce",
    },
    console.log('Connected to the workforce database.')

);

db.connect((err) => {
    if (err) {
        return console.error('error ' + err.message);
    }
    console.log("Connected");
});

module.exports = db;