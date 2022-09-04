const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('long_read_plans', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_START_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_END_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_PLAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'long_read_plans',
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
