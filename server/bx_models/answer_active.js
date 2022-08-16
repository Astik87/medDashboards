const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answer_active', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_ANSW_EVENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ANSW_ACTIVE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ANSW_ALL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ANSW_JSON: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'answer_active',
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
