const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('streamopros', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_TEST: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_VIDEO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_SCORES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ANSWER: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_QUESTION: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'streamopros',
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
