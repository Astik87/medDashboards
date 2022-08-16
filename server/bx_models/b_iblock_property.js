const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_property', {
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
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock',
        key: 'ID'
      }
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEFAULT_VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROPERTY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S"
    },
    ROW_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    COL_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    LIST_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "L"
    },
    MULTIPLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    XML_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FILE_TYPE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MULTIPLE_CNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMP_ID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    LINK_IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WITH_DESCRIPTION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEARCHABLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    FILTRABLE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    IS_REQUIRED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    USER_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USER_TYPE_SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HINT: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_property',
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
        name: "ix_iblock_property_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
        ]
      },
      {
        name: "ix_iblock_property_3",
        using: "BTREE",
        fields: [
          { name: "LINK_IBLOCK_ID" },
        ]
      },
      {
        name: "ix_iblock_property_2",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
    ]
  });
};
