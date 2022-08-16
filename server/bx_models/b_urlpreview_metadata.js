const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_urlpreview_metadata', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    URL: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S"
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DATE_EXPIRE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IMAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMAGE: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    EMBED: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EXTRA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_urlpreview_metadata',
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
        name: "IX_URLPREVIEW_METADATA_URL",
        using: "BTREE",
        fields: [
          { name: "URL", length: 255 },
        ]
      },
    ]
  });
};
