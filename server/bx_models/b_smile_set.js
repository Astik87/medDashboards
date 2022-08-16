const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_smile_set', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "G"
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    STRING_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150
    }
  }, {
    sequelize,
    tableName: 'b_smile_set',
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
