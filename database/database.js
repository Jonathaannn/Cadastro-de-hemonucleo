require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const banco = new Sequelize(
  process.env.BD_DATA,
  process.env.BD_USER,
  process.env.BD_PASS,
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "postgres",
  }
);

module.exports = banco;
