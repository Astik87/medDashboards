const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_element', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MODIFIED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    IBLOCK_SECTION_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    ACTIVE_FROM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACTIVE_TO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PREVIEW_PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PREVIEW_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PREVIEW_TEXT_TYPE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "text"
    },
    DETAIL_PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DETAIL_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DETAIL_TEXT_TYPE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "text"
    },
    SEARCHABLE_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WF_STATUS_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    WF_PARENT_ELEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WF_NEW: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    WF_LOCKED_BY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WF_DATE_LOCK: {
      type: DataTypes.DATE,
      allowNull: true
    },
    WF_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IN_SECTIONS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TAGS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TMP_ID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    WF_LAST_HISTORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHOW_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHOW_COUNTER_START: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_element',
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
        name: "ix_iblock_element_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "IBLOCK_SECTION_ID" },
        ]
      },
      {
        name: "ix_iblock_element_4",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "XML_ID" },
          { name: "WF_PARENT_ELEMENT_ID" },
        ]
      },
      {
        name: "ix_iblock_element_3",
        using: "BTREE",
        fields: [
          { name: "WF_PARENT_ELEMENT_ID" },
        ]
      },
      {
        name: "ix_iblock_element_code",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "CODE" },
        ]
      },
    ]
  });
};
