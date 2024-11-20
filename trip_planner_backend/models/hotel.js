module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define(
    "hotel",
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      price: DataTypes.FLOAT,
      available_rooms: DataTypes.INTEGER,
    },
    { timestamps: true }
  );

  return hotel;
};
