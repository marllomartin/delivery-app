const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
    {
      timestamps: false,
    });

  Product.associate = (models) => {

  };

  return Product;
};

module.exports = Product;
