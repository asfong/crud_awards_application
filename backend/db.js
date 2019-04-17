var mysql = require('mysql');
var Sequelize = require('sequelize');

module.exports = new Sequelize('cs467_luimi', 'cs467_luimi', '9225', {
  host: 'classmysql.engr.oregonstate.edu',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

//create connection to OSU cs476_luimi database
var db = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs467_luimi',
  password        : '9225',
  database        : 'cs467_luimi',
});

module.exports.pool = db;
