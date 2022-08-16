const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_file', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WIDTH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILE_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CONTENT_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "IMAGE"
    },
    SUBDIR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FILE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ORIGINAL_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HANDLER_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_file',
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
        name: "IX_B_FILE_EXTERNAL_ID",
        using: "BTREE",
        fields: [
          { name: "EXTERNAL_ID" },
        ]
      },
    ]
  });
};
