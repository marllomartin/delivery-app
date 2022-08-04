const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return Sale;
};

module.exports = Sale;
