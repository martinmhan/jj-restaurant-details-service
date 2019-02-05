const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getInfo = (id, callback) => {
  connection.query('SELECT * FROM restaurant WHERE id=?', id, callback);
};

module.exports = {
  getInfo,
};
