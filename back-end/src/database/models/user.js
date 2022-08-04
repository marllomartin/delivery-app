const User = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
    });

  User.associate = (models) => {
    User.hasMany(models.Sales, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return User;
};

module.exports = User;
