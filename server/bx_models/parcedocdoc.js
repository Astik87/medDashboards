const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parcedocdoc', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DIRECTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DIRECTION_MED: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DIFFERENCES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_CITY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_CITY_MED: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_USER_ID: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'parcedocdoc',
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
