const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CALCULATION_METHOD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "SUM"
    },
    CREATED: {
      type: DataTypes.DATE,
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
    POSITION: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    AUTHORITY: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    CALCULATED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    CONFIGS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rating',
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
