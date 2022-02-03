'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: Sequelize.INTEGER,
      table_nr: Sequelize.INTEGER,
      is_takeaway: Sequelize.BOOLEAN,
      menu_id: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  }
};
