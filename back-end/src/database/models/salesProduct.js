const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define("SalesProduct", {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: false,
    });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'salesId',
      otherKey: 'productId'
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'salesId'
    });
  };

  return SalesProduct;
};

module.exports = SalesProduct;
