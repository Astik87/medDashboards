const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_geoname', {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    LANGUAGE_CODE: {
      type: DataTypes.STRING(35),
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(600),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_geoname',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "LANGUAGE_CODE" },
        ]
      },
    ]
  });
};
