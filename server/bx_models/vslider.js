const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vslider', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_URL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_IMG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CLICK: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vslider',
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
