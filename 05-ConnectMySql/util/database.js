const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Jnaitsabes9", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// direct connection with mysql2
/* const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Jnaitsabes9",
});

module.exports = pool.promise(); */
