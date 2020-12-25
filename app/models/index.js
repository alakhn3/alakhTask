const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  },
  { operatorsAliases }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.vote = require("../models/vote.model.js")(sequelize, Sequelize);
db.movie = require("../models/movie.model.js")(sequelize, Sequelize);



module.exports = db;
