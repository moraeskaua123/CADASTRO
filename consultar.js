const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'cadastro.php'
});

 connection.connect();
console.log("conectado")
 
 
 let query = "Select * from usuario";
 connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
 })
 connection.end();
