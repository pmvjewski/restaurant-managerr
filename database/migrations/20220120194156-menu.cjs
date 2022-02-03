'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("menus", {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL(10,2),
      category: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("menus");
  }
};
