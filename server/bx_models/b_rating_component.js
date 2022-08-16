const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_component', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RATING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ENTITY_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RATING_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COMPLEX_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CALC_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EXCEPTION_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LAST_MODIFIED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_CALCULATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NEXT_CALCULATION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    REFRESH_INTERVAL: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CONFIG: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rating_component',
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
        name: "IX_RATING_ID_1",
        using: "BTREE",
        fields: [
          { name: "RATING_ID" },
          { name: "ACTIVE" },
          { name: "NEXT_CALCULATION" },
        ]
      },
    ]
  });
};
