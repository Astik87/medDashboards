const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_weight', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RATING_FROM: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    RATING_TO: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    WEIGHT: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rating_weight',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
