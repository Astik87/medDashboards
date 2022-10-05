const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_ui_file_uploader_temp_file', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GUID: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: "IX_B_UI_UPLOADER_GUID"
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILENAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PATH: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MIMETYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RECEIVED_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    WIDTH: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    HEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CONTROLLER: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CLOUD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    UPLOADED: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    DELETED: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_ui_file_uploader_temp_file',
    timestamps: true,
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
        name: "IX_B_UI_UPLOADER_GUID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GUID" },
        ]
      },
      {
        name: "IX_B_UI_UPLOADER_FILE_ID",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
      {
        name: "IX_B_UI_UPLOADER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "CREATED_AT" },
        ]
      },
    ]
  });
};
