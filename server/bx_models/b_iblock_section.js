const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_section', {
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
      references: {
        model: 'b_iblock',
        key: 'ID'
      }
    },
    IBLOCK_SECTION_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'b_iblock_section',
        key: 'ID'
      }
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    GLOBAL_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
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
    PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LEFT_MARGIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RIGHT_MARGIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEPTH_LEVEL: {
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
    SEARCHABLE_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TMP_ID: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DETAIL_PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOCNET_GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_section',
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
        name: "IBLOCK_SECTION_ID",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_SECTION_ID" },
        ]
      },
      {
        name: "ix_iblock_section_1",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "IBLOCK_SECTION_ID" },
        ]
      },
      {
        name: "ix_iblock_section_depth_level",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "DEPTH_LEVEL" },
        ]
      },
      {
        name: "ix_iblock_section_left_margin",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "LEFT_MARGIN" },
          { name: "RIGHT_MARGIN" },
        ]
      },
      {
        name: "ix_iblock_section_right_margin",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "RIGHT_MARGIN" },
          { name: "LEFT_MARGIN" },
        ]
      },
      {
        name: "ix_iblock_section_code",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "CODE" },
        ]
      },
    ]
  });
};
