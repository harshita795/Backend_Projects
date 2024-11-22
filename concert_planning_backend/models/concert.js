module.exports = (sequelize, DataTypes) => {
  const concert = sequelize.define(
    "concert",
    {
      artist: DataTypes.STRING,
      venue: DataTypes.STRING,
      city: DataTypes.STRING,
      date: DataTypes.DATE,
      ticketPrice: DataTypes.FLOAT,
      seatCategory: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );

  return concert;
};
