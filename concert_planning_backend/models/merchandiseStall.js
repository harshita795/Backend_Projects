module.exports = (sequelize, DataTypes) => {
  const merchandiseStall = sequelize.define(
    "merchandiseStall",
    {
      stallName: DataTypes.STRING,
      itemAvailable: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    { timestamps: true }
  );

  return merchandiseStall;
};
