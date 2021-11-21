"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("superheros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
        field: "nick_name",
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING,
        field: "real_name",
        allowNull: false,
      },
      originDescription: {
        type: Sequelize.STRING,
        field: "origin_description",
        allowNull: false,
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("superheros");
  },
};
