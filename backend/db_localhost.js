var mysql = require('mysql');
var Sequelize = require('sequelize');

module.exports = new Sequelize('team_kang', 'root', 'pin3appl3', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

// create connection to OSU cs476_luimi database
var db = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'pin3appl3',
  database        : 'team_kang'
});

module.exports.pool = db;
