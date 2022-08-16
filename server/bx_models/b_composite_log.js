const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_composite_log', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HOST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    URI: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MESSAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AJAX: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_composite_log',
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
        name: "IX_B_COMPOSITE_LOG_PAGE_ID",
        using: "BTREE",
        fields: [
          { name: "PAGE_ID" },
        ]
      },
      {
        name: "IX_B_COMPOSITE_LOG_HOST",
        using: "BTREE",
        fields: [
          { name: "HOST" },
        ]
      },
      {
        name: "IX_B_COMPOSITE_LOG_TYPE",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
        ]
      },
    ]
  });
};
