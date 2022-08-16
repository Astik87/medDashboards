const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_medialib_collection', {
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
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    DATE_UPDATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    KEYWORDS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ITEMS_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ML_TYPE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_medialib_collection',
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
