const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


const getInfo = function(callback) {
  connection.query('SELECT * FROM restaurant WHERE id=2',callback)
}


module.exports = {
  getInfo
}