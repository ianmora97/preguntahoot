var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "preguntados"
});

con.connect(function(err) {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('DB is conected');
    }
});
module.exports = con;