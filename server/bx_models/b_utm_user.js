const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_utm_user', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FIELD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VALUE_INT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALUE_DOUBLE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VALUE_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_utm_user',
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
        name: "ix_utm_USER_1",
        using: "BTREE",
        fields: [
          { name: "FIELD_ID" },
        ]
      },
      {
        name: "ix_utm_USER_2",
        using: "BTREE",
        fields: [
          { name: "VALUE_ID" },
        ]
      },
    ]
  });
};
