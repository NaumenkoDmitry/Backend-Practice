"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class superpowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*  superpowers.hasMany(models.superhero, {
        foreignKey: 'superpowerId'
      }); */
      superpowers.belongsToMany(models.Superhero, {
        through: "superpower_to_superhero",
        foreignKey: "superpowerId",
      });
    }
  }
  superpowers.init(
    {
      namePower: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name_power",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "superpowers",
      underscored: true,
      tableName: "superpower",
    }
  );
  return superpowers;
};
