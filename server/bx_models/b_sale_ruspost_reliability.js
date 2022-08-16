const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sale_ruspost_reliability', {
    HASH: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    RELIABILITY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FULL_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sale_ruspost_reliability',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HASH" },
        ]
      },
    ]
  });
};
