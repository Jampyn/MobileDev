const config = require("../configs/db.config");

const Sequelize = require("sequelize"); //S คือ object
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAlias: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize, Sequelize); //สร้างตาราง user 
db.role = require("../models/role.model")(sequelize, Sequelize); //สร้างตาราง role

// one to many
db.role.belongsToMany(db.user, {  //ตารางที่เชื่อมกัน
    through:"user_roles",
    foreingKey:"roleId",
    otherKey:"userId"
});
//one to many
db.user.belongsToMany(db.role, { //ตารางที่เชื่อมกัน
  through: "user_roles",
  foreingKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;