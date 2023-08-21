const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college"
});

connection.connect(function (err){
    if (err) {
        console.warn(`not connected`);
        console.log(err)
    } else {
        console.warn(`connected`)
    }
})