const { DataTypes } = require("sequelize");
const db = require("../conn/db");

const Unidade = db.define("Unidade", {
  imovelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numeroUnidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comodos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valorAluguel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ocupada: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Unidade;
