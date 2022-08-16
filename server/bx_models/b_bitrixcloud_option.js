const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_bitrixcloud_option', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARAM_KEY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARAM_VALUE: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_bitrixcloud_option',
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
        name: "ix_b_bitrixcloud_option_1",
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};
