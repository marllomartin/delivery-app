const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
      underscored: true,
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId',
    });
    Sale.belongsTo(models.user, {
      as: 'seller',
      foreignKey: 'sellerId',
    });
  };

  return Sale;
};

module.exports = Sale;
