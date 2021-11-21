"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class imagehero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      imagehero.belongsTo(models.Superhero);
    }
  }
  imagehero.init(
    {
      superheroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
        field: "superheroId",
      },
      image: {
        type: DataTypes.STRING,
        field: "image",
      },
    },
    {
      sequelize,
      modelName: "imagehero",
      underscored: true,
      tableName: "imagehero",
    }
  );
  return imagehero;
};
