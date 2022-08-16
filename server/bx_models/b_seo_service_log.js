const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_service_log', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MESSAGE: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    GROUP_ID: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_seo_service_log',
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
