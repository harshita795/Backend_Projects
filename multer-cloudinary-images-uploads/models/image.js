module.exports = (Sequelize, DataTypes) => {
  Image.init(
    {
      url: DataTypes.STRING,
      secure_url: DataTypes.STRING,
      tags: DataTypes.STRING,
      uploadedAt: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      isDeleted: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      Sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
