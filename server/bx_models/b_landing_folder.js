const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_folder', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    INDEX_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    DELETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(255),
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
    tableName: 'b_landing_folder',
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
        name: "IX_B_FOLDER_SITE_ID",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
        ]
      },
      {
        name: "IX_B_FOLDER_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_B_FOLDER_DELETED",
        using: "BTREE",
        fields: [
          { name: "DELETED" },
        ]
      },
    ]
  });
};
