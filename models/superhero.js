"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*   Superhero.hasMany(models.superpowers, {
        foreignKey: 'superheroId'
      }); */
      Superhero.belongsToMany(models.superpowers, {
        through: "superpower_to_superhero",
        foreignKey: "superheroId",
      });
    }
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "nick_name",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "real_name",

        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "origin_description",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      catchPhrase: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "catch_phrase",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Superhero",
      underscored: true,
      tableName: "superheros",
    }
  );
  return Superhero;
};
