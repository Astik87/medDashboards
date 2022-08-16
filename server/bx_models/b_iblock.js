const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock', {
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
    IBLOCK_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'b_iblock_type',
        key: 'ID'
      }
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      references: {
        model: 'b_lang',
        key: 'LID'
      }
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    API_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "ix_iblock_api_code"
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
    LIST_PAGE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DETAIL_PAGE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SECTION_PAGE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CANONICAL_PAGE_URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DESCRIPTION_TYPE: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: "text"
    },
    RSS_TTL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 24
    },
    RSS_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    RSS_FILE_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    RSS_FILE_LIMIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSS_FILE_DAYS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSS_YANDEX_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TMP_ID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    INDEX_ELEMENT: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    INDEX_SECTION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    WORKFLOW: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    BIZPROC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SECTION_CHOOSER: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    LIST_MODE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RIGHTS_MODE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SECTION_PROPERTY: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PROPERTY_INDEX: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    LAST_CONV_ELEMENT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SOCNET_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDIT_FILE_BEFORE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EDIT_FILE_AFTER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SECTIONS_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SECTION_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ELEMENTS_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ELEMENT_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REST_ON: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_iblock',
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
        name: "ix_iblock_api_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "API_CODE" },
        ]
      },
      {
        name: "LID",
        using: "BTREE",
        fields: [
          { name: "LID" },
        ]
      },
      {
        name: "ix_iblock",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_TYPE_ID" },
          { name: "LID" },
          { name: "ACTIVE" },
        ]
      },
    ]
  });
};
