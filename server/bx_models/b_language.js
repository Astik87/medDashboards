const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_language', {
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    DEF: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FORMAT_DATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMAT_DATETIME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMAT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WEEK_START: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CHARSET: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DIRECTION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CULTURE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_language',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LID" },
        ]
      },
    ]
  });
};
