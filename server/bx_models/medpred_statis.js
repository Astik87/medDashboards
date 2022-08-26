const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medpred_statis', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_FAIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_FULL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SUCC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SPEC_NAME: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medpred_statis',
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
