

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
 
 
 let query = "update usuario set senha = 345643 where codigo = 8;";
 connection.query(query, function(error, results, fields){
    console.log("Alteraçoes feitas ");

 })
 connection.end();