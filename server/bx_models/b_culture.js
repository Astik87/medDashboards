const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_culture', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WEEK_START: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    CHARSET: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DIRECTION: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    SHORT_DATE_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "n\/j\/Y"
    },
    MEDIUM_DATE_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "M j, Y"
    },
    LONG_DATE_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "F j, Y"
    },
    FULL_DATE_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "l, F j, Y"
    },
    DAY_MONTH_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "F j"
    },
    SHORT_TIME_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "g:i a"
    },
    LONG_TIME_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "g:i:s a"
    },
    AM_VALUE: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "am"
    },
    PM_VALUE: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "pm"
    },
    NUMBER_THOUSANDS_SEPARATOR: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ","
    },
    NUMBER_DECIMAL_SEPARATOR: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "."
    },
    NUMBER_DECIMALS: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 2
    },
    DAY_SHORT_MONTH_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "M j"
    },
    DAY_OF_WEEK_MONTH_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "l, F j"
    },
    SHORT_DAY_OF_WEEK_MONTH_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "D, F j"
    },
    SHORT_DAY_OF_WEEK_SHORT_MONTH_FORMAT: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "D, M j"
    }
  }, {
    sequelize,
    tableName: 'b_culture',
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
