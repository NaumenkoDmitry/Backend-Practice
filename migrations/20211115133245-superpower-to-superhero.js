"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("superpowers_to_superhero", {
      superheroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "super_hero_Id",
        references: {
          model: {
            tableName: "superheros",
          },
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      superpowerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "super_power_Id",
        references: {
          model: {
            tableName: "superpowers",
          },
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable("superpowers_to_superhero");
  },
};
