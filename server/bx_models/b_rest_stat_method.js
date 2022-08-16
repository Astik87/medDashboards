const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_stat_method', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "ux_b_rest_stat_method"
    },
    METHOD_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "M"
    }
  }, {
    sequelize,
    tableName: 'b_rest_stat_method',
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
      {
        name: "ux_b_rest_stat_method",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};
