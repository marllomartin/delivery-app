const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: false,
    });

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  };

  return SalesProduct;
};

module.exports = SalesProduct;
