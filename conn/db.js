const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("alugaai", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
