const Sequelize = require('sequelize');
const conn = require('../conn');

const { STRING, INTEGER, BOOLEAN } = Sequelize;

const User = conn.define('user', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: INTEGER,
    defaultValue: 0,
  },
  email: {
    type: STRING,
  },
  isSimpson: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

User.prototype.addClassMate = function (clasmmateId) {
  const ClassMate = conn.models.classmates;
  ClassMate.create({ userId: this.id, classMateId: clasmmateId });
};

//not not?
User.prototype.isEnrolled = function () {
  return !!this.schoolId;
};

module.exports = User;
