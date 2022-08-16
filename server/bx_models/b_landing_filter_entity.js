const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_filter_entity', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SOURCE_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FILTER_HASH: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      unique: "IX_B_FILTER_HASH"
    },
    FILTER: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CREATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODIFIED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'b_landing_filter_entity',
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
        name: "IX_B_FILTER_HASH",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FILTER_HASH" },
        ]
      },
    ]
  });
};
