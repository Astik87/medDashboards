const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sticker', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    PAGE_URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PAGE_TITLE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DATE_UPDATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MODIFIED_BY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CREATED_BY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PERSONAL: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    POS_TOP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POS_LEFT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WIDTH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COLOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COLLAPSED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    COMPLETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    CLOSED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    DELETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    MARKER_TOP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MARKER_LEFT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MARKER_WIDTH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MARKER_HEIGHT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MARKER_ADJUST: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sticker',
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
    ]
  });
};
