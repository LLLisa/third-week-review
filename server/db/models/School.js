const Sequelize = require('sequelize');
const conn = require('../conn');

const School = conn.define('school', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = School;
