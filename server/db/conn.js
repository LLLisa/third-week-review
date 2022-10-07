const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/simpsons', { logging: false });

module.exports = conn;
