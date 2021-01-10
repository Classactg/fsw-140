const express = require("express");
const mysql = require("mysql");

// Create a MySQL Connection Handshake using a Connection String
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'password'
    }
);

// Complexity is 3 Everything is cool!
db.connect((err) => {
    if (err)
    {
        throw err;
    }
    console.log("MySQL Database Connection Established Seccessfully!");
});

// Setting up a Basic Express Server
const app = express();

//Create a Database
// Complexity is 4 Everything is cool!
app.get('/SELECTdb', (req, res) => {
    let sqlQuery = "SELECT * FROM property;";
    //Run the SQL Command
    // Complexity is 3 Everything is cool!
    db.query(sqlQuery, (err, result) => {
        if (err)
        {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

//Open Up the Server and its Port
app.listen('3000', () => {
    console.log("Local Web Server Running on Port")
})