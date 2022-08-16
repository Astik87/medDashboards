const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_translate_path', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    DEPTH_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    IS_LANG: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    IS_DIR: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    OBLIGATORY_LANGS: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    INDEXED: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    INDEXED_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSIGNMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_translate_path',
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
        name: "IX_TRNSL_PTH_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
          { name: "NAME" },
        ]
      },
      {
        name: "IX_TRNSL_PTH_PARENT",
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
          { name: "IS_DIR" },
          { name: "IS_LANG" },
        ]
      },
      {
        name: "IX_TRNSL_PTH_PATH",
        using: "BTREE",
        fields: [
          { name: "PATH", length: 255 },
        ]
      },
    ]
  });
};
