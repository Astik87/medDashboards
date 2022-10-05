const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_placement', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PLACEMENT: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PLACEMENT_HANDLER: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    GROUP_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ADDITIONAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ICON_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OPTIONS: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rest_placement',
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
        name: "ux_b_rest_placement1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "APP_ID" },
          { name: "PLACEMENT", length: 100 },
          { name: "PLACEMENT_HANDLER", length: 200 },
        ]
      },
      {
        name: "ix_b_rest_placement3",
        using: "BTREE",
        fields: [
          { name: "PLACEMENT", length: 100 },
          { name: "ADDITIONAL", length: 100 },
        ]
      },
      {
        name: "ix_b_rest_placement4",
        using: "BTREE",
        fields: [
          { name: "PLACEMENT" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
