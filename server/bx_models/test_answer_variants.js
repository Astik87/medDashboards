const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_answer_variants', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_QUESTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TEXT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SORT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_RIGHT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SCORE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_answer_variants',
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
