const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_medialib_item', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ITEM_TYPE: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DATE_UPDATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SOURCE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    KEYWORDS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEARCHABLE_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_medialib_item',
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
