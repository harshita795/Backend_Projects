module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("hotels", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      location: Sequelize.STRING,
      price: Sequelize.FLOAT,
      available_rooms: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("hotels");
  },
};
