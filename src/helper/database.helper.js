const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "mysql://root:root@localhost:3306/practical_techerudite",
  {
    dialect: "mysql",
    logging: false,
  }
);

module.exports = {
  sequelize,
};
