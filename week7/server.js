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
app.use(express.json())


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

//Create a Database
// Complexity is 4 Everything is cool!
app.post('/', (req, res) => {
    console.log(req.body)
    let sqlQuery = `INSERT INTO property(Pricecol, Landscape)VALUES(${req.body.price},'${req.body.landscape}');`;
    //Run the SQL Command
    // Complexity is 3 Everything is cool!
    db.query(sqlQuery, (err, result) => {
        if (err)
        {
            throw err;
        }
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
        // console.log(result);
        // res.send(result);
    });
});

//Create a Database
// Complexity is 4 Everything is cool!
app.put('/UPDATEdb/:id', (req, res) => {
    let sqlQuery = `UPDATE property SET ${req.body.price? `Pricecol = ${req.body.price}`:``},${req.body.landscape? `Landscape = ${req.body.landscape}`:``} WHERE idAcres = ${req.params.id};`;
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

//Create a Database
// Complexity is 4 Everything is cool!
app.delete('/DELETEdb/:id', (req, res) => {
    let sqlQuery = `DELETE FROM property WHERE idAcres = ${req.params.id};`;
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
app.listen('9000', () => {
    console.log("Local Web Server Running on Port")
})